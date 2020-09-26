"use strict";

const DeveloperError = require("../core/DeveloperError");

/**
 * Must be thrown when a directory is not exist.
 */
class DirectoryNotExistError extends DeveloperError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("Directory is not exist.");
  }
}

module.exports = DirectoryNotExistError;
