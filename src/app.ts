import express, { Application, Request, Response } from "express"
import cors from "cors"
import userRouter from "./app/modules/user/user.route"
import doctorRouter from "./app/modules/doctor/doctor.route"
import appoinmentRouter from "./app/modules/appointment/appointment.route"

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/user", userRouter)
app.use("/api/v1/doctor", doctorRouter)
app.use("/api/v1/appointment", appoinmentRouter)

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Doctor Hub Server is running successfully",
  })
})

export default app
