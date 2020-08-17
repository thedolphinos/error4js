"use strict";

class DocumentNotFoundError extends Error
{
  constructor ()
  {
    super();

    this.message = "Document not found.";
  }
}

module.exports = DocumentNotFoundError;
