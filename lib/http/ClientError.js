const utility = require("@thedolphinos/utility4js");

const HTTPError = require("../core/HTTPError");
const InvalidArgumentsError = require("../developer/InvalidArgumentsError");

/**
 * Should be used as a super class for an error which must be thrown when there is a client error.
 */
class ClientError extends HTTPError
{
  /**
   * @param {number} statusCode
   * @param {Object} message
   */
  constructor (statusCode, message)
  {
    ClientError._validateStatusCodeForClientError(statusCode);

    super(statusCode, message);
  }

  /* VALIDATE */
  /**
   * @param {number} statusCode
   * @private
   */
  static _validateStatusCodeForClientError (statusCode)
  {
    const clientErrorStatusCodes = [400, 401, 402, 403, 404, 405, 406, 407, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 422, 425, 426, 428, 429, 431, 451];

    if (!utility.isValidNumber(statusCode) || !clientErrorStatusCodes.includes(statusCode))
    {
      throw new InvalidArgumentsError();
    }
  }
}

module.exports = ClientError;
