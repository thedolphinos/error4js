const utility = require("@thedolphinos/utility4js");

const DeveloperError = require("../core/DeveloperError");
const DATA = require("../DATA.json");

/**
 * Must be thrown when the arguments of a function/method/constructor are invalid.
 */
class InvalidArgumentsError extends DeveloperError
{
  /**
   * @param {Object} [data]
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (data = undefined, ...args)
  {
    data = utility.init(data, DATA.DEV_1);

    super(data, ...args);
  }
}

module.exports = InvalidArgumentsError;
