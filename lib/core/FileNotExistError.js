"use strict";

class FileNotExistError extends Error
{
  message = "File not exist.";

  constructor ()
  {
    super();
  }
}

module.exports = FileNotExistError;
