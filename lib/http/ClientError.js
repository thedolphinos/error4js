const utility = require("@thedolphinos/utility4js");

const HTTPError = require("../core/HTTPError");
const InvalidArgumentsError = require("../developer/InvalidArgumentsError");
const DATA = require("../DATA.json");

/**
 * Should be used as a super class for an error which must be thrown when there is a client error.
 */
class ClientError extends HTTPError
{
  /**
   * @param {Object} [data] Contains status code other than default fields.
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (data, ...args)
  {
    data = utility.init(data, DATA.HTTP_20);

    ClientError._validateStatusCode(data?.statusCode);

    super(data, ...args);
  }

  /* VALIDATE */
  /**
   * @param {number} statusCode
   * @private
   */
  static _validateStatusCode (statusCode)
  {
    HTTPError._validateStatusCode(statusCode);

    const allowedStatusCodes = [400, 401, 402, 403, 404, 405, 406, 407, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 422, 425, 426, 428, 429, 431, 451];

    if (!allowedStatusCodes.includes(statusCode))
    {
      throw new InvalidArgumentsError();
    }
  }
}

module.exports = ClientError;
