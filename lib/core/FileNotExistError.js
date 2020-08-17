"use strict";

class FileNotExistError extends Error
{
  constructor ()
  {
    super();

    this.message = "File not exist.";
  }
}

module.exports = FileNotExistError;
