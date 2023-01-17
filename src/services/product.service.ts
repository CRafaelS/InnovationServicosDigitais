import { PrismaClient } from '@prisma/client';
import { networkInterfaces } from 'os';
import { IProduct } from '../interfaces/product.interface';
import HttpException from '../utils/httpException';

const prisma = new PrismaClient()

export default class ProductService {
    public createProduct = async (name: string, category: string, status: string, quantity: number): Promise<IProduct> => {
        const productExist = await prisma.product.findFirst({
            where: {
                name,
            },
        });
        if (productExist) {
            throw new HttpException(409, 'Product already exists')
            
        }
        if (status == "ACTIVE" || status == "INACTIVE") {
            const createNewProduct = prisma.product.create({
                data: {
                    name,
                    category,
                    status,
                    quantity, 
                }
            })
            return createNewProduct
        }
        else {
            throw new HttpException(400, 'Status must be ACTIVE or INACTIVE')
        }
    }
    public getAllProducts = async (): Promise<IProduct[]> => {
        const allProducts = await prisma.product.findMany();
        return allProducts;
    }

    public updateProduct = async (id: number, name: string, category: string, status: string, quantity: number): Promise<IProduct> => {
        const updatedProducts = await prisma.product.update({
            where: {
                id,
            },
            data: {
                name,
                category,
                status,
                quantity,
                updated_at: new Date()
            }
        });
        return updatedProducts;
    }

    public getProductById = async (id: number): Promise<IProduct> => {
        const product = await prisma.product.findUnique({
            where: {
                id
            }
        })
        if (product == null) {
            throw new HttpException(404, 'Not found this product')
            
        }
        return product
    }

    public deleteProduct =async (id: number) => {
        await prisma.product.delete({
            where: {
                id
            }
        })
    }
}