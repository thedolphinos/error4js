"use strict";

class DocumentNotFound extends Error
{
  message = "Document not found.";

  constructor ()
  {
    super();
  }
}

module.exports = DocumentNotFound;
