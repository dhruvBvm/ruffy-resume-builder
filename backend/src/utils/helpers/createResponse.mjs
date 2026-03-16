export const createResponse = (success, code, massage, data, errors ) => {
    return {
        success: success,
        statusCode: code,
        message: massage,
        data: data,
        errors: errors
    }
}