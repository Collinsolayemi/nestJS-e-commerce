import { Document } from 'mongoose';
import { User } from './user';
import { Product } from './product';

interface ProductOrder {
    products: Product,
    quantity: number
}


export interface Order extends Document {
  owner: User;
  totalPrice: number;
  product: ProductOrder[];
}
