import { Request, Response } from "express"
import { appointmentService } from "./appointment.service"

const allAppointments = async (req: Request, res: Response) => {
  const email = req.body
  const appointments = await appointmentService.allAppointmentsFromDB(
    email.patient.email
  )
  res.status(200).json({
    message: `All appointments for ${email.patient.email}`,
    data: appointments,
  })
}
const createAppointment = async (req: Request, res: Response) => {
  const appointment = await req.body
  const newAppointment = await appointmentService.createAppointmentFromDB(
    appointment
  )
  await newAppointment.save()
  res.status(201).json({
    message: "Appointment created successfully",
    data: newAppointment,
  })
}

export const appointmentController = {
  createAppointment,
  allAppointments,
}
