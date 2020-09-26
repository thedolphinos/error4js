"use strict";

const DeveloperError = require("../core/DeveloperError");

/**
 * Must be thrown when a file is not exist.
 */
class FileNotExistError extends DeveloperError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("File is not exist.");
  }
}

module.exports = FileNotExistError;
