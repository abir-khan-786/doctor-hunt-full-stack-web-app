/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose"
import { IDoctor } from "./doctor.interface"

const DoctorSchema = new Schema<IDoctor>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    Designation: {
      type: String,
      required: true,
    },
    Degree: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const Doctor = model<IDoctor>("Doctor", DoctorSchema)
