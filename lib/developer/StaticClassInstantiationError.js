const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const DeveloperError = require("../core/DeveloperError");
const InvalidArgumentsError = require("./InvalidArgumentsError");

/**
 * Must be thrown when the static class is initialized.
 */
class StaticClassInstantiationError extends DeveloperError
{
  /**
   * @param {string} [className]
   * @param {Object} [message]
   */
  constructor (className = undefined, message = undefined)
  {
    if (utility.isExist(className) && !_.isString(className))
    {
      throw new InvalidArgumentsError();
    }

    message = utility.init(message, {en: `Static class ${utility.isExist(className) ? `(${className})` : ""} cannot be instantiated.`});

    super(message);
  }
}

module.exports = StaticClassInstantiationError;
