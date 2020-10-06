const utility = require("@thedolphinos/utility4js");

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request headers are required and missing.
 */
class HeadersMissingError extends BadRequestError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Request headers are missing."});

    super(message);
  }
}

module.exports = HeadersMissingError;
