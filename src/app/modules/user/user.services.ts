import { User } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find().select('all users');
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
};
