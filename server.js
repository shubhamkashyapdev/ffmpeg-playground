import express from "express"
import multer from "multer"
import dotenv from "dotenv"
import colors from "colors"
import path from "path"
import cors from "cors"
import connectDB from "./config/connectDB.js"

// routes imports
import YouTubeRoutes from "./routes/YouTubeRoutes.js"

const app = express()

dotenv.config()
connectDB()

// middlewares
app.use(express.json())

app.use(function (req, res, next) {
  res.header("Cross-Origin-Embedder-Policy", "require-corp")
  res.header("Cross-Origin-Opener-Policy", "same-origin")
  next()
})
const dirname = path.resolve()
app.use("/uploads", cors(), express.static(path.join(dirname, "/uploads")))

app.use("/api/v1", YouTubeRoutes)

// if we are in production set the build folder as static folder and send the index.html  //
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(dirname, "/frontend/build")))
  app.get("*", (req, res, next) => {
    res.sendFile(path.resolve(dirname, "frontend", "build", "index.html"))
  })
} else {
  app.get("/", (req, res, next) => {
    res.send("API is running...")
  })
}

// Make Connection
const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV
app.listen(PORT, () => {
  console.log(
    `Server is listening on port: ${PORT} in ${NODE_ENV} environment`.blue.bold
  )
})
