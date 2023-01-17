import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
    private _service: ProductService;
    constructor() {
        this._service = new ProductService();
    }

    public async createdProduct(req: Request, res: Response) {
        const { name, category, status, quantity } = req.body
        const newProduct = await this._service.createProduct(name, category, status, quantity);
        return res.status(201).json(newProduct);
    }
    
    public async getAllProducts(_req: Request, res: Response) {
        const allProducts = await this._service.getAllProducts();
        return res.status(200).json(allProducts)
    }

    public async updateProducts(req: Request, res: Response) {
        const { id } = req.params;
        const { name, category, status, quantity } = req.body
        const updatedProduct = await this._service.updateProduct(+id, name, category, status, quantity);
        return res.status(200).json(updatedProduct)
    }
}