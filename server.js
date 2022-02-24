const express = require("express")
const multer = require("multer")
const dotenv = require("dotenv")
const colors = require("colors")
const cors = require("cors")
const path = require("path")

const app = express()

// middlewares
dotenv.config()
// app.use(cors())

app.use(function (req, res, next) {
  res.header("Cross-Origin-Embedder-Policy", "require-corp")
  res.header("Cross-Origin-Opener-Policy", "same-origin")
  next()
})

const dirname = path.resolve()
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
    `Server is listening on port: ${PORT} in ${NODE_ENV} environment`.green.bold
  )
})
