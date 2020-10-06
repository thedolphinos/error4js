const utility = require("@thedolphinos/utility4js");

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request query string is required and missing.
 */
class QueryStringMissingError extends BadRequestError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Request query string is missing."});

    super(message);
  }
}

module.exports = QueryStringMissingError;
