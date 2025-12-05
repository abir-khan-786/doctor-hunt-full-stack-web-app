

const createUserFromDB = async (user: Partial<IUser>): Promise<IUser> => {
  const newUser = new UserModel(user)
  await newUser.save()
  return newUser
}