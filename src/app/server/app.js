import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/gamehive', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/products', productRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});