"use strict";

class DirectoryNotExistError extends Error
{
  message = "Directory not exist.";

  constructor ()
  {
    super();
  }
}

module.exports = DirectoryNotExistError;
