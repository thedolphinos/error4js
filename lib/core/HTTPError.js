const utility = require("@thedolphinos/utility4js");

const BaseError = require("./BaseError");
const InvalidArgumentsError = require("../developer/InvalidArgumentsError");
const DATA = require("../DATA.json");

/**
 * Should be used as a super class for an error which should be thrown as an HTTP response.
 */
class HTTPError extends BaseError
{
  /**
   * @param {Object} [data] Contains status code other than default fields.
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (data = undefined, ...args)
  {
    data = utility.init(data, DATA.HTTP_0);

    if (utility.isExist(data) && utility.isExist(data.statusCode))
    {
      HTTPError._validateStatusCode(data.statusCode);
    }

    super(data, ...args);

    if (utility.isExist(data) && utility.isExist(data.statusCode))
    {
      this._statusCode = data.statusCode;
    }
  }

  /* GET/SET */
  /**
   * @returns {number}
   */
  get statusCode ()
  {
    return this._statusCode;
  }

  /* VALIDATE */
  /**
   * @param {number} statusCode
   * @protected
   */
  static _validateStatusCode (statusCode)
  {
    if (!utility.isValidNumber(statusCode))
    {
      throw new InvalidArgumentsError();
    }
  }
}

module.exports = HTTPError;
