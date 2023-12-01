import { z } from 'zod';

const addressSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
});

const orderSchema = z.object({
  productName: z.string().min(1),
  price: z.number(),
  quantity: z.number(),
});

const userValidationSchema = z.object({
  userId: z.number(),
  username: z.string().min(4),
  password: z.string().min(6),
  fullName: z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
  }),
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string().min(1)),
  address: addressSchema,
  orders: z.array(orderSchema),
});

export default userValidationSchema;
