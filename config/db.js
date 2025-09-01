const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        .then(()=> console.log("Fabrication-Manager connected"))
    } catch (error) {
        console.log("Error connecting fabrication database", error)
    }
}

module.exports = connectDB