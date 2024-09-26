import mongoose from "mongoose";
import Product from '../models/product.js'
import product from './data.js'

const seedProducts = async ()=>{
    try {

        await mongoose.connect("mongodb://localhost:27017/ecommercerenv")

        await Product.deleteMany()
        console.log("Product deleted")

        await Product.insertMany(product)
        console.log("All product added")

        process.exit()
        
    } catch (error) {
        console.log(error.message)
        process.exit()
    }
}

seedProducts()