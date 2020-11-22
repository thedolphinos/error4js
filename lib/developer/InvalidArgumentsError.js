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
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.DEV_1);

    super(data);
  }
}

module.exports = InvalidArgumentsError;
