"use strict";

class DocumentNotFoundError extends Error
{
  message = "Document not found.";

  constructor ()
  {
    super();
  }
}

module.exports = DocumentNotFoundError;
