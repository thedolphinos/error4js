const utility = require("@thedolphinos/utility4js");

const InvalidArgumentsError = require("../../developer/InvalidArgumentsError");
const ClientError = require("../../http/ClientError");
const DATA = require("../../DATA.json");

/**
 * Must be thrown when there is a problem with the request.
 * May be used as a super class.
 */
class BadRequestError extends ClientError
{
  /**
   * @param {Object} [data] Contains status code other than default fields.
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.HTTP_21);

    BadRequestError._validateStatusCode(data?.statusCode);

    super(data);
  }

  /* VALIDATE */
  /**
   * @param {number} statusCode
   * @private
   */
  static _validateStatusCode (statusCode)
  {
    ClientError._validateStatusCode(statusCode);

    const allowedStatusCodes = [400];

    if (!allowedStatusCodes.includes(statusCode))
    {
      throw new InvalidArgumentsError();
    }
  }
}

module.exports = BadRequestError;
