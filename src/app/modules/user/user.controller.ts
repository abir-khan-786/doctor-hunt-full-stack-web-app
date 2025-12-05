import { Request, Response } from "express"
import { userService } from "./user.service"

export const createUserFromDB = async (req: Request, res: Response) => {
  const user = req.body
  const newUser = await userService.createUser(user)
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
