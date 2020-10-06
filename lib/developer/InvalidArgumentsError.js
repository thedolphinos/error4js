const utility = require("@thedolphinos/utility4js");

const DeveloperError = require("../core/DeveloperError");

/**
 * Must be thrown when the arguments of a function/method/constructor are invalid.
 */
class InvalidArgumentsError extends DeveloperError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Invalid arguments."});

    super(message);
  }
}

module.exports = InvalidArgumentsError;
