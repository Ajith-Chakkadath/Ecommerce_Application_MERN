import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
    let error = {
        statusCode: err?.statusCode || 500,
        message: err?.message || "Internal Server Error"
    };

    // Handling Mongoose bad ObjectId error (CastError)
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid ${err.path}`;
        error = new ErrorHandler(message, 404);
    }

    // Handling Mongoose validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((value) => value.message).join(", ");
        error = new ErrorHandler(message, 400);
    }

    if (process.env.NODE_ENV === "DEVELOPMENT") {
        return res.status(error.statusCode).json({
            message: error.message,
            error: err,
            stack: err.stack
        });
    }

    if (process.env.NODE_ENV === "PRODUCTION") {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
};
