const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const DeveloperError = require("../core/DeveloperError");
const InvalidArgumentsError = require("./InvalidArgumentsError");
const DATA = require("../DATA.json");

/**
 * Must be thrown when the static class is initialized.
 */
class StaticClassInstantiationError extends DeveloperError
{
  /**
   * @param {string} [className]
   * @param {Object} [data]
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (className = undefined, data = undefined, ...args)
  {
    data = utility.init(data, DATA.DEV_2);

    StaticClassInstantiationError._validateClassName(className);

    super(data, ...args);
    this._assignParametersIntoPlaceholders(className);
  }

  /* VALIDATE */
  /**
   * @param {string} className
   * @private
   */
  static _validateClassName (className)
  {
    if (utility.isExist(className) && !_.isString(className))
    {
      throw new InvalidArgumentsError();
    }
  }
}

module.exports = StaticClassInstantiationError;
