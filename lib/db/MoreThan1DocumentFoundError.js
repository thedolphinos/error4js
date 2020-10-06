const DbError = require("../core/DbError");

/**
 * Must be thrown when there must be only 1 queried document, but there is more than 1.
 */
class MoreThan1DocumentFoundError extends DbError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "More than 1 document was found with the specified query. However, for this operation it must be 1."});

    super(message);
  }
}

module.exports = MoreThan1DocumentFoundError;
