/**
 *
 * @param message
 * @param payload
 * @returns {{package, message, status: boolean}}
 */
 exports.successResponse = (message, payload) => {
  let response = {
    code: message,
    payload: payload,
  };

  return response;
};

/**
 *
 * @param message
 * @param payload
 * @returns {{message, status: boolean}}
 */
exports.failResponse = (code, message, payload = null) => {
  let response = {
    code: code,
    error: message,
  };
  
  return response;
};

/**
 *
 * @type {{message: string, status: boolean}}
 */
exports.notFoundResponse = {
  code: 'not_found',
  message: 'Unable to find the requested resource!',
};