"use strict";

/**
 * Must be thrown if a directory is not exist.
 *
 * @since 0.2.0
 */
class DirectoryNotExistError extends Error
{
  constructor ()
  {
    super();

    this.message = "Directory not exist.";
  }
}

module.exports = DirectoryNotExistError;
