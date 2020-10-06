const utility = require("@thedolphinos/utility4js");

const UnauthorizedError = require("../UnauthorizedError");

/**
 * Must be thrown when the token is invalid.
 */
class InvalidTokenError extends UnauthorizedError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Invalid token."});

    super(message);
  }
}

module.exports = InvalidTokenError;
