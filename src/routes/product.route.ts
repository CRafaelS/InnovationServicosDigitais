import { Router,  Request, Response } from "express";
import ProductController from "../controller/product.controller";

const routers = Router();

const productController = new ProductController();

routers.post('/product', (req: Request, res: Response) => productController.createdProduct(req, res))

export default routers;