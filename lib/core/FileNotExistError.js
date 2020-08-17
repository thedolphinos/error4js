"use strict";

/**
 * Must be thrown when a file is not exist.
 *
 * @since 0.2.0
 */
class FileNotExistError extends Error
{
  constructor ()
  {
    super();

    this.message = "File not exist.";
  }
}

module.exports = FileNotExistError;
