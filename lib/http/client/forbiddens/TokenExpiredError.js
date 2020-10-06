const utility = require("@thedolphinos/utility4js");

const UnauthorizedError = require("../UnauthorizedError");

/**
 * Must be thrown when the account is blocked.
 */
class TokenExpiredError extends UnauthorizedError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Token is expired."});

    super(message);
  }
}

module.exports = TokenExpiredError;
