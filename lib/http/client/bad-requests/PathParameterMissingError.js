const utility = require("@thedolphinos/utility4js");

const BadRequestError = require("../BadRequestError");
const InvalidArgumentsError = require("../../../developer/InvalidArgumentsError");

/**
 * Must be thrown when the specified request path parameter is required and missing.
 */
class PathParameterMissingError extends BadRequestError
{
  /**
   * @param {string} [name]
   * @param {Object} [message]
   */
  constructor (name = undefined, message = undefined)
  {
    if (utility.isExist(name) && !_.isString(name))
    {
      throw new InvalidArgumentsError();
    }

    message = utility.init(message, {en: `Request path parameter ${utility.isExist(name) ? `(${name})` : ""} is missing.`});

    super(message);
  }
}

module.exports = PathParameterMissingError;
