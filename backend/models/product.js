import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the product name"],
        maxLength: [200, "Product name cannot exceed 200 characters"],
    },
    price: {
        type: Number,
        required: [true, "Please enter the product price"],
        max: [99999, "Product price cannot exceed 5 digits"],  // Use 'max' instead of 'maxLength' for numbers
    },
    description: {
        type: String,
        required: [true, "Please enter the product description"],
    },
    ratings: {
        type: Number,
        default: 0,
    },
    image: [
        {
            public_id: {
                type: String,  // Change to String (capital S)
                required: true,
            },
            url: {
                type: String,  // Change to String (capital S)
                required: true,
            },
        },
    ],
    category: {
        type: String,  // Change to String (capital S)
        required: [true, "Please enter the product category"],
        enum: {
            values: [
                "Electronics", "Cameras", "Laptops", "Home", "Outdoor", "Book", "Sports","Headphones","Accessories","Food"
            ],
            message: "Please select a valid category",
        },
    },
    seller: {
        type: String,  // Change to String (capital S)
        required: [true, "Please enter the product seller"],
    },
    stock: {
        type: Number,  // Change to Number (capital N)
        required: [true, "Please enter the product stock number"],
        min: [0, "Stock cannot be negative"],  // Optional: You can add min validation for stock
    },
    numOfReviews: {
        type: Number,  // Change to Number (capital N)
        default: 0,
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            rating: {
                type: Number,  // Change to Number (capital N)
                required: true,
            },
            comment: {
                type: String,  // Change to String (capital S)
                required: true,
            },
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
