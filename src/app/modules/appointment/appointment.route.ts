import express from "express"

const appoinmentRouter = express.Router()

appoinmentRouter.get("/", (req, res) => {
  res.json({ message: "Appointment  profile route" })
})

export default appoinmentRouter
