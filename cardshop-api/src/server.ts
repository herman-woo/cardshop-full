import express from 'express';
import cors from 'cors';
import orderRoutes from './handlers/orders';
import productRoutes from './handlers/products';
import userRoutes from './handlers/users';
import orderProductRoutes from './handlers/orders_products';
const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

const port = process.env.PORT || 8081;
app.get('/',(req: express.Request , res: express.Response) => {
    res.send('Card Shop Backend API, massive update')
})
userRoutes(app)
productRoutes(app)
orderRoutes(app)
orderProductRoutes(app)

app.listen(port,() => console.log(`Listening on port:${port}`))