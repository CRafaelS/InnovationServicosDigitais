import { Router,  Request, Response } from "express";
import ProductController from "../controller/product.controller";

const routers = Router();

const productController = new ProductController();

routers.post('/product', (req: Request, res: Response) => productController.createdProduct(req, res))
routers.get('/product', (req: Request, res: Response) => productController.getAllProducts(req, res))
routers.get('/product/:id', (req: Request, res: Response) => productController.GetById(req, res))
routers.put('/product/:id', (req: Request, res: Response) => productController.updateProducts(req, res))

export default routers;