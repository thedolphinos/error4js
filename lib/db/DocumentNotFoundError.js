"use strict";

const DbError = require("../core/DbError");

/**
 * Must be thrown when the queried document is not found.
 */
class DocumentNotFoundError extends DbError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("Document not found.");
  }
}

module.exports = DocumentNotFoundError;
