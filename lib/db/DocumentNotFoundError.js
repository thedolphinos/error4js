"use strict";

/**
 * Must be thrown when the queried document is not found.
 *
 * @since 0.4.0
 */
class DocumentNotFoundError extends Error
{
  constructor ()
  {
    super();

    this.message = "Document not found.";
  }
}

module.exports = DocumentNotFoundError;
