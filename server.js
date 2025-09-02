const express = require("express")
const connectDB = require("./config/db")
const fabricationRoutes = require("./routes/fabrication.routes")
const orderRoutes = require("./routes/order.routes")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 7462

app.use(express.json())

connectDB()

app.use("/api/fabrication", fabricationRoutes)
app.use("/api/fabrication-orders", orderRoutes)

app.listen(PORT, ()=> {
    console.log(`Fabrication micro-service is running on port ${PORT}`)
})