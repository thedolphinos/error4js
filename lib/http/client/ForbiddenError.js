const utility = require("@thedolphinos/utility4js");

const InvalidArgumentsError = require("../../developer/InvalidArgumentsError");
const ClientError = require("../../http/ClientError");
const DATA = require("../../DATA.json");

/**
 * Must be thrown when there is a problem with authorization to perform the requested operation on the given resource.
 * May be used as a super class.
 */
class ForbiddenError extends ClientError
{
  /**
   * @param {Object} [data] Contains status code other than default fields.
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.HTTP_23);

    ForbiddenError._validateStatusCode(data?.statusCode);

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

    const allowedStatusCodes = [403];

    if (!allowedStatusCodes.includes(statusCode))
    {
      throw new InvalidArgumentsError();
    }
  }
}

module.exports = ForbiddenError;
