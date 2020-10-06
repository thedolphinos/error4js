const utility = require("@thedolphinos/utility4js");

const HTTPError = require("../core/HTTPError");
const InvalidArgumentsError = require("../developer/InvalidArgumentsError");

/**
 * Should be used as a super class for an error which must be thrown when there is a server error.
 */
class ServerError extends HTTPError
{
  /**
   * @param {number} statusCode
   * @param {Object} message
   */
  constructor (statusCode, message)
  {
    ServerError._validateStatusCodeForServerError(statusCode);

    super(statusCode, message);
  }

  /* VALIDATE */
  /**
   * @param {number} statusCode
   * @private
   */
  static _validateStatusCodeForServerError (statusCode)
  {
    const serverErrorStatusCodes = [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511];

    if (!utility.isValidNumber(statusCode) || !serverErrorStatusCodes.includes(statusCode))
    {
      throw new InvalidArgumentsError();
    }
  }
}

module.exports = ServerError;
