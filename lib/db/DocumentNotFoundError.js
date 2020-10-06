const utility = require("@thedolphinos/utility4js");

const DbError = require("../core/DbError");

/**
 * Must be thrown when the queried document is not found.
 */
class DocumentNotFoundError extends DbError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Document not found."});

    super(message);
  }
}

module.exports = DocumentNotFoundError;
