import { IUser } from "./user.interface"
import { UserModel } from "./user.model"

export const createUser = async (user: Partial<IUser>): Promise<IUser> => {
  const newUser = new UserModel(user)
  await newUser.save()
  return newUser
}
