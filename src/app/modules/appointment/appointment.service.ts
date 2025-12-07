import { IAppointment } from "./appointment.interface"
import { Appointment } from "./appointment.model"

const makeAppointment = async (appointmentData: IAppointment) => {
  const appointment = await Appointment.create(appointmentData)
  return appointment
}

export const appointmentService = {
  makeAppointment,
}
