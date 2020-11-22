const utility = require("@thedolphinos/utility4js");

const ForbiddenError = require("../ForbiddenError");
const DATA = require("../../../DATA.json");

/**
 * Must be thrown when the account is blocked.
 */
class AccountBlockedError extends ForbiddenError
{
  /**
   * @param {Object} [data] Contains status code other than default fields.
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.HTTP_231);

    super(data);
  }
}

module.exports = AccountBlockedError;
