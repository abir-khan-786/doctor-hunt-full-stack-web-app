export interface IAppointment {
  _id?: string // MongoDB ObjectId
  appointmentId: string // Custom/UUID id

  // Patient Info
  patient: {
    userId: string
    name: string
    phone: string
    email: string
    gender: "male" | "female" | "other"
    age?: number
  }

  // Doctor Info
  doctor: {
    doctorId: string
    name: string
    specialization: string
    department?: string
  }

  // Appointment Details
  date: string // YYYY-MM-DD
  timeSlot: string // e.g. "10:30 AM"
  appointmentType: "online" | "in-person" | "emergency" | "follow-up"

  reason?: string // Patient problem / description

  // Status
  status: "pending" | "confirmed" | "completed" | "cancelled"

  // Payment Info
  payment?: {
    method: "bkash" | "nagad" | "rocket" | "card" | "cash"
    amount: number
    transactionId: string
    status?: "paid" | "unpaid" | "refunded"
  }

  // Meta
  createdAt?: string
  updatedAt?: string
}
