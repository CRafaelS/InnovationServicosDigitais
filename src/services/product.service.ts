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
}