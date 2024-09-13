import Product from '../models/product.js'


// All product Display
export const getAllProducts = async (req,res)=>{
    res.status(200).json({
        message : "Product are displayed",
    })
}


// Add a product

export const newProduct = async (req,res)=>{
    const product = await Product.create(req.body)

    res.status(200).json({product})
}