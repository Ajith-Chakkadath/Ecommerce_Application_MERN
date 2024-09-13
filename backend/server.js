import express from "express";
import dotenv from 'dotenv';
import { connectDatabase } from "./config/dbConnect.js";
import productRoutes from './routes/productRoutes.js';
const app = express();

// Load environment variables from config file
dotenv.config({ path: "backend/config/config.env" });

// Connect to the database
connectDatabase();

// Middleware to parse JSON
app.use(express.json());  // Fixed this part

// Routes
app.use('/api/v1', productRoutes);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server connected to ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
