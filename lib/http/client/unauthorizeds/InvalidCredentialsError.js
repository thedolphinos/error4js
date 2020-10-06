const utility = require("@thedolphinos/utility4js");

const UnauthorizedError = require("../UnauthorizedError");

/**
 * Must be thrown when authorization credentials are invalid.
 */
class InvalidCredentialsError extends UnauthorizedError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Invalid credentials."});

    super(message);
  }
}

module.exports = InvalidCredentialsError;
