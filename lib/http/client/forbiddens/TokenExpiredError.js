const utility = require("@thedolphinos/utility4js");

const UnauthorizedError = require("../UnauthorizedError");
const DATA = require("../../../DATA.json");

/**
 * Must be thrown when the account is blocked.
 */
class TokenExpiredError extends UnauthorizedError
{
  /**
   * @param {Object} [data] Contains status code other than default fields.
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.HTTP_232);

    super(data);
  }
}

module.exports = TokenExpiredError;
