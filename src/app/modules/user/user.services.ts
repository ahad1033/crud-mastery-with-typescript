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

const getSingleUserFromDB = async (_id: string) => {
  const result = await UserModel.findOne({ _id });
  return result;
};

const deleteSingeUserFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  deleteSingeUserFromDB,
};
