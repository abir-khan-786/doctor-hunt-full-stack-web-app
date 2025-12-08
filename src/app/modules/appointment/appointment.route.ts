import express from "express"
import { appointmentController } from "./appointment.controller"

const appoinmentRouter = express.Router()

appoinmentRouter.get("/" , appointmentController.allAppointments)
appoinmentRouter.post("/create", appointmentController.createAppointment)

export default appoinmentRouter
