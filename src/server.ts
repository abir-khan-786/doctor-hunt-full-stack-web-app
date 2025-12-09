import { Server } from "http"
import app from "./app"
import config from "./config/index"

async function startServer() {
  // Connect to MongoDB

  try {
    const server: Server = app.listen(config.port, () => {
      console.log("Sever is running on port ", config.port)
    })

    const exitHandler = () => {
      if (server) {
        server.close(() => {
          console.info("Server closed!")
        })
      }
      process.exit(1)
    }
    process.on("uncaughtException", (error) => {
      console.log(error)
      exitHandler()
    })

    process.on("unhandledRejection", (error) => {
      console.log(error)
      exitHandler()
    })

    console.log("Connected to MongoDB")
    app.listen(config.port, () => {
      console.log(`Server is running on http://localhost:${config.port}`)
    })
  } catch (err) {
    console.log("Failed to connect to MongoDB")
  }
}

startServer()
