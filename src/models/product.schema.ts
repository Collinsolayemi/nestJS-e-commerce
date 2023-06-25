import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  descriptiom: String,
  image: String,
  price: String,
  created: {
    type: Date,
    default: Date.now,
  },
});
