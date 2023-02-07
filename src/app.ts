import express from 'express';
import OrderRoutes from './routes/orders.routes';
import ProductRoutes from './routes/products.routes';
import UserRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductRoutes);

app.use('/users', UserRoutes);

app.use('/orders', OrderRoutes);

export default app;
