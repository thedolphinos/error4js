"use strict";

const DeveloperError = require("../core/DeveloperError");

/**
 * Must be thrown when a directory is not exist.
 *
 * @since 0.2.0
 */
class DirectoryNotExistError extends DeveloperError
{
  /**
   * Creates an instance.
   *
   * @since 0.2.0
   */
  constructor ()
  {
    super("Directory is not exist.");
  }
}

module.exports = DirectoryNotExistError;
