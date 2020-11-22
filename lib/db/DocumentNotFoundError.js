const utility = require("@thedolphinos/utility4js");

const DbError = require("../core/DbError");
const DATA = require("../DATA.json");

/**
 * Must be thrown when the queried document is not found.
 */
class DocumentNotFoundError extends DbError
{
  /**
   * @param {Object} [data]
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.DB_1);

    super(data);
  }
}

module.exports = DocumentNotFoundError;
