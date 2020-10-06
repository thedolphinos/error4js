const utility = require("@thedolphinos/utility4js");

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request body is required and missing.
 */
class BodyMissingError extends BadRequestError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Request body is missing."});

    super(message);
  }
}

module.exports = BodyMissingError;
