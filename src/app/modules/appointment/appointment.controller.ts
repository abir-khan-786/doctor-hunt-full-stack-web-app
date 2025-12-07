import { Request, Response } from "express"
import { appointmentService } from "./appointment.service"

const makeAppointmentFromDB = async (req: Request, res: Response) => {
  const appointment = await req.body
  const newAppointment = await appointmentService.makeAppointment(appointment)
  await newAppointment.save()
  res.status(201).json({
    message: "Appointment created successfully",
    data: newAppointment,
  })
}

export const appointmentController = {
  makeAppointmentFromDB,
}
