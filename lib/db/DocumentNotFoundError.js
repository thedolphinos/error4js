"use strict";

const DbError = require("../core/DbError");

/**
 * Must be thrown when the queried document is not found.
 *
 * @since 0.4.0
 */
class DocumentNotFoundError extends DbError
{
  /**
   * Creates an instance.
   *
   * @since 0.4.0
   */
  constructor ()
  {
    super("Document not found.");
  }
}

module.exports = DocumentNotFoundError;
