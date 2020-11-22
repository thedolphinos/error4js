const utility = require("@thedolphinos/utility4js");

const DbError = require("../core/DbError");
const DATA = require("../DATA.json");

/**
 * Must be thrown when there must be only 1 queried document, but there is more than 1.
 */
class MoreThan1DocumentFoundError extends DbError
{
  /**
   * @param {Object} [data]
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.DB_2);

    super(data);
  }
}

module.exports = MoreThan1DocumentFoundError;
