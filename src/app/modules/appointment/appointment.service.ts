import { IAppointment } from "./appointment.interface"
import { Appointment } from "./appointment.model"

const allAppointmentsFromDB = async (email: string) => {
  const appointment = await Appointment.aggregate([
    {
      $match: { "patient.email": email },
    },
  ])

  // i need filtering particular user appointments
  return appointment
}

const createAppointmentFromDB = async (appointmentData: IAppointment) => {
  const appointment = await Appointment.create(appointmentData)
  return appointment
}

export const appointmentService = {
  createAppointmentFromDB,
  allAppointmentsFromDB,
}
