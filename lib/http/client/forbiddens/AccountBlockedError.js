const utility = require("@thedolphinos/utility4js");

const ForbiddenError = require("../ForbiddenError");

/**
 * Must be thrown when the account is blocked.
 */
class AccountBlockedError extends ForbiddenError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Account is blocked."});

    super(message);
  }
}

module.exports = AccountBlockedError;
