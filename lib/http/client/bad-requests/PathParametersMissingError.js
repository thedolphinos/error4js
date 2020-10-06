const utility = require("@thedolphinos/utility4js");

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request path parameters are required and missing.
 */
class PathParametersMissingError extends BadRequestError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Request path parameters are missing."});

    super(message);
  }
}

module.exports = PathParametersMissingError;
