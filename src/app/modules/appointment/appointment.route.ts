import express from "express"
import { appointmentController } from "./appointment.controller"

const appoinmentRouter = express.Router()

appoinmentRouter.get("/")
appoinmentRouter.post("/create", appointmentController.makeAppointmentFromDB)

export default appoinmentRouter
