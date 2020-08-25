"use strict";

const DeveloperError = require("../core/DeveloperError");

/**
 * Must be thrown when a file is not exist.
 *
 * @since 0.2.0
 */
class FileNotExistError extends DeveloperError
{
  /**
   * Creates an instance.
   *
   * @since 0.2.0
   */
  constructor ()
  {
    super("File is not exist.");
  }
}

module.exports = FileNotExistError;
