const utility = require("@thedolphinos/utility4js");

const BaseError = require("./BaseError");
const InvalidArgumentsError = require("../developer/InvalidArgumentsError");

/**
 * Should be used as a super class for an error which should be thrown as an HTTP response.
 */
class HTTPError extends BaseError
{
  /**
   * @param {number} statusCode
   * @param {Object} message
   */
  constructor (statusCode, message)
  {
    if (!utility.isValidNumber(statusCode))
    {
      throw new InvalidArgumentsError();
    }

    super(message);

    this._statusCode = statusCode;
  }

  /* GET/SET */
  /**
   * @returns {number}
   */
  get statusCode ()
  {
    return this._statusCode;
  }
}

module.exports = HTTPError;
