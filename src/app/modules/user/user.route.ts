import express from "express"
import { createUserFromDB, getAllUsersFromDB } from "./user.controller"

const userRouter = express.Router()

userRouter.post("/create", createUserFromDB)

userRouter.get("/", getAllUsersFromDB)

export default userRouter
