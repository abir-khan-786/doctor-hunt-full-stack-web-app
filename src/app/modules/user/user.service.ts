import { Request } from "express"
import { PrismaClient } from "../../../generated/prisma/client"

import { MongoDBAdapter } from "@prisma/adapter-mongodb"
const prisma = new PrismaClient({
  adapter: new MongoDBAdapter(process.env.DATABASE_URL),
})
const createUser = async (req: Request) => {
  const newUser = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      role: req.body.role,
      password: req.body.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
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
