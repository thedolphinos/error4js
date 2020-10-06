const utility = require("@thedolphinos/utility4js");

const HTTPError = require("../../core/HTTPError");

/**
 * Must be thrown when there is a problem with the request.
 * May be used as a super class.
 */
class BadRequestError extends HTTPError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Bad request."});

    super(400, message);
  }
}

module.exports = BadRequestError;
