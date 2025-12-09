import { Request, Response } from "express"
import { userService } from "./user.service"

export const createUserFromDB = async (req: Request, res: Response) => {
  const newUser = await userService.createUser(req)
  await newUser.save()
  res.status(201).json({
    message: "User created successfully",
    data: newUser,
  })
}

export const getAllUsersFromDB = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers()
  res.status(200).json(users)
}
