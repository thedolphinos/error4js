"use strict";

class DirectoryNotExistError extends Error
{
  constructor ()
  {
    super();

    this.message = "Directory not exist.";
  }
}

module.exports = DirectoryNotExistError;
