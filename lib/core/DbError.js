const utility = require("@thedolphinos/utility4js");

const BaseError = require("./BaseError");
const DATA = require("../DATA.json");

/**
 * Should be used as a super class for an error which are caused in database level.
 */
class DbError extends BaseError
{
  /**
   * @param {Object} [data]
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (data = undefined, ...args)
  {
    data = utility.init(data, DATA.DB_0);

    super(data, ...args);
  }
}

module.exports = DbError;
