const sendResponse = (res, message = "Success", data = {}, status = 200, success = 1) => {
    return res.status(status).json({
        success,
        message,
        data,   // Explicitly pass data inside a "data" field for clarity and consistency
    });
};

const sendError = (res, err, message = "Something went wrong", status = 500 , data = {}) => {
    
    let errorMessage = message;
    let errorDetails = err;
    let errdata = data;

    // Handling specific types of errors (Sequelize or general validation errors)
    if (err) {
        if (err.name === "SequelizeUniqueConstraintError") {
            errorMessage = "Database constraint error";
            errorDetails = err.errors.map(e => ({
                message: e.message,
                type: e.type,
                path: e.path,
                value: e.value,
                origin: e.origin,
                validatorKey: e.validatorKey,
                validatorName: e.validatorName,
                validatorArgs: e.validatorArgs
            }));
        } else if (err.name === "SequelizeValidationError") {
            errorMessage = "Validation error";
            errorDetails = err.errors.map(e => ({
                message: e.message,
                path: e.path,
                value: e.value,
            }));
        } else {
            // General or custom error message
            errorMessage = err.message || errorMessage;
        }
    }

    // Avoid exposing full error stack in production
    const errorResponse = {
        success: 0,
        message: errorMessage,
        data: errdata,
    };

    if (process.env.NODE_ENV !== 'production') {
        // Include error details for development environment only
        errorResponse.error = errorDetails;
    }

    return res.status(status).json(errorResponse);
};

module.exports = {
    sendResponse,
    sendError
};
