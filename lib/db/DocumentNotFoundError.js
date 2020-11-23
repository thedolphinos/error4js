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
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (data = undefined, ...args)
  {
    data = utility.init(data, DATA.DB_1);

    super(data, ...args);
  }
}

module.exports = DocumentNotFoundError;
