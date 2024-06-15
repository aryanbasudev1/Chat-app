import mongoose from "mongoose";
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI,)
        console.log("connected to MongoDB")
    } catch (error) {
        console.log("Error connected to MongoDB", error.message)
    }
}

export default connectMongoDB