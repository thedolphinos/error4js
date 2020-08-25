"use strict";

const DeveloperError = require("../core/DeveloperError");

/**
 * Must be thrown when the arguments of a function/method/constructor are invalid.
 *
 * @since 0.2.0
 */
class InvalidArgumentsError extends DeveloperError
{
  /**
   * Creates an instance.
   *
   * @since 0.2.0
   */
  constructor ()
  {
    super("Invalid arguments.");
  }
}

module.exports = InvalidArgumentsError;
