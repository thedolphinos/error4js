const BaseError = require("./BaseError");

/**
 * Should be used as a super class for an error which are caused by developers.
 */
class DeveloperError extends BaseError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    super(message);
  }
}

module.exports = DeveloperError;
