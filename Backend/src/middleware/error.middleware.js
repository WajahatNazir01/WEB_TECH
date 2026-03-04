// Change exports.errorHandler to export const errorHandler
export const errorHandler = (err, req, res, next) => {
    // Log the error for the developer
    console.error(err);

    // Send a structured error response to the client
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
};