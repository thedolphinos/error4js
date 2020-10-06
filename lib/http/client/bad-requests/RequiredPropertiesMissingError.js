const utility = require("@thedolphinos/utility4js");

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when the required properties are missing.
 */
class RequiredPropertiesMissingError extends BadRequestError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Required properties are missing."});

    super(message);
  }
}

module.exports = RequiredPropertiesMissingError;
