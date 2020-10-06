const utility = require("@thedolphinos/utility4js");

const HTTPError = require("../../core/HTTPError");

/**
 * Must be thrown when there is a problem with the authorization.
 * May be used as a super class.
 */
class UnauthorizedError extends HTTPError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Unauthorized."});

    super(401, message);
  }
}

module.exports = UnauthorizedError;
