
import Product from '../models/product.js'
import ErrorHandler from '../utils/errorHandler.js'


// All product Display
export const getAllProducts = async (req,res)=>{
    const product = await Product.find()
    
    res.status(200).json({
        product,
    })
}


// Add a product

export const newProduct = async (req,res)=>{
    const product = await Product.create(req.body)

    res.status(200).json({product})
}

export const getProductDetails = async (req,res ,next)=>{
    const product = await Product.findById(req?.params?.id)

    if(!product){
        return next(new ErrorHandler('Product not Found' , 404))
    }

    res.status(200).json({product})
}

export const updateProduct = async (req,res)=>{
    let product = await Product.findById(req?.params?.id)

    if(!product){
        return res.status(404).json({
            error : "No product Found"
        })
    }

    product = await Product.findByIdAndUpdate(req?.params?.id,req.body,{new :true })


    res.status(200).json({product})
}


export const deleteProduct = async (req,res)=>{
    const product = await Product.findById(req?.params?.id)

    if(!product){
        return res.status(404).json({
            error : "No product Found"
        })
    }

   await Product.deleteOne()


    res.status(200).json({
        message :"Product deleted succesfully"
    })
}