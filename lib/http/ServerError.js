const utility = require("@thedolphinos/utility4js");

const InvalidArgumentsError = require("../developer/InvalidArgumentsError");
const HTTPError = require("../core/HTTPError");
const DATA = require("../DATA.json");

/**
 * Should be used as a super class for an error which must be thrown when there is a server error.
 */
class ServerError extends HTTPError
{
  /**
   * @param {Object} [data] Contains status code other than default fields.
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (data, ...args)
  {
    data = utility.init(data, DATA.HTTP_10);

    if (utility.isExist(data) && utility.isExist(data.statusCode))
    {
      ServerError._validateStatusCode(data.statusCode);
    }

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

    const allowedStatusCodes = [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511];

    if (!allowedStatusCodes.includes(statusCode))
    {
      throw new InvalidArgumentsError();
    }
  }
}

module.exports = ServerError;
