/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose"
import { IUser } from "./user.interface.js"
const UserSchema = new Schema<IUser>(
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
      enum: ["doctor", "admin", "patient"],
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const User = model<IUser>("User", UserSchema)
