import express from 'express';
import 'express-async-errors';
import middlewareError from './middleware/middleware.error';
import routers from './routes/product.route';

const app = express();

app.use(express.json());
app.use(routers)
app.use(middlewareError);

export { app };