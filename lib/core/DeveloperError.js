const utility = require("@thedolphinos/utility4js");

const BaseError = require("./BaseError");
const DATA = require("../DATA.json");

/**
 * Should be used as a super class for an error which are caused by developers.
 */
class DeveloperError extends BaseError
{
  /**
   * @param {Object} [data]
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (data = undefined, ...args)
  {
    data = utility.init(data, DATA.DEV_0);

    super(data, ...args);
  }
}

module.exports = DeveloperError;
