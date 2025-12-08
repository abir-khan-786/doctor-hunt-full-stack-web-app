import prisma from "../../../shared/prisma"

const createUser = async () => {
  const newUser = await prisma
  return newUser
}
const getAllUsers = async () => {
  const users = "adsf"
  return users
}

export const userService = {
  createUser,
  getAllUsers,
}
