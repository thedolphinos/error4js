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
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.DB_0);

    super(data);
  }
}

module.exports = DbError;
