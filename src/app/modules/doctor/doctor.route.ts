import express from "express"

const doctorRouter = express.Router()

doctorRouter.get("/", (req, res) => {
  res.json({ message: "Doctor profile route" })
})

// Define your doctor routes here

export default doctorRouter
