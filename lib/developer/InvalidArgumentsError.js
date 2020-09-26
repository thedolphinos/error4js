"use strict";

const DeveloperError = require("../core/DeveloperError");

/**
 * Must be thrown when the arguments of a function/method/constructor are invalid.
 */
class InvalidArgumentsError extends DeveloperError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("Invalid arguments.");
  }
}

module.exports = InvalidArgumentsError;
