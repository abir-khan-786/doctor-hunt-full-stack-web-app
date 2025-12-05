import express, { Application, Request, Response } from "express"
import cors from "cors"
import userRouter from "./app/modules/user/user.route"

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/user", userRouter)

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Doctor Hub Server is running successfully",
  })
})

export default app
