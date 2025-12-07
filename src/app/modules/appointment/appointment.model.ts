import { model, Schema } from "mongoose"
import { IAppointment } from "./appointment.interface"

const AppointmentModel = new Schema<IAppointment>({
  _id: { type: String, required: true },
  appointmentId: { type: String, required: true, unique: true },

  patient: {
    userId: { type: String },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
  },
  doctor: {
    doctorId: { type: String, required: true },
    name: { type: String, required: true },
    specialization: { type: String, required: true },
  },
  date: { type: String, required: true },
  timeSlot: { type: String, required: true },
  appointmentType: { type: String, required: true },
  status: { type: String, required: true },
  reason: { type: String },
  payment: {
    method: { type: String },
    amount: { type: Number },
    transactionId: { type: String },
    status: { type: String },
  },
  createdAt: { type: String, default: Date.now },
  updatedAt: { type: String, default: Date.now },
})

const Appointment = model<IAppointment>("Appointment", AppointmentModel)

export { Appointment }
