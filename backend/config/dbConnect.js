import mongoose from "mongoose";

export const connectDatabase = () => {
    let DB_URL = ""

    // Corrected NODE_ENV
    if(process.env.NODE_ENV === 'DEVELOPMENT') DB_URL = process.env.DB_URL_DEV
    if(process.env.NODE_ENV === 'PRODUCTION') DB_URL = process.env.DB_URL_PRO

    mongoose.connect(DB_URL).then((con) => {
        console.log(`Mongoose is connected to the Host: ${con?.connection?.host}`);
    }).catch((err) => {
        console.error("Database connection error:", err);
    });
}
