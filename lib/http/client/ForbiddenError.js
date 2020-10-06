const utility = require("@thedolphinos/utility4js");

const HTTPError = require("../../core/HTTPError");

/**
 * Must be thrown when there is a problem with authorization to perform the requested operation on the given resource.
 * May be used as a super class.
 */
class ForbiddenError extends HTTPError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Forbidden."});

    super(403, message);
  }
}

module.exports = ForbiddenError;
