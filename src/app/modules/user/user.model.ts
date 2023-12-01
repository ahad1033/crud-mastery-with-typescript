import { Schema, model, connect } from 'mongoose';
import { Address, FullName, Orders, User } from './user.interface';

const fullNameSchema = new Schema<FullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const ordersSchema = new Schema<Orders>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const userSchema = new Schema<User>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: fullNameSchema,
  age: { type: Number },
  email: { type: String },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: addressSchema,
  orders: {
    type: [ordersSchema],
  },
});

export const UserModel = model<User>('User', userSchema);
