import { PrismaClient } from '@prisma/client';
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
}