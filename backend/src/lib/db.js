import mongoose from "mongoose"



 export const connectDB = async () => {
    try {
         await mongoose.connect(process.env.MONGO_URL);
         console.log("connectify connected to db");
         
    } catch (error) {
        console.log("mongoose connection errot", error);
        
    }
}