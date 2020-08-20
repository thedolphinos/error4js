"use strict";

/**
 * Must be thrown when the arguments of a function/method/constructor are invalid.
 *
 * @since 0.2.0
 */
class InvalidArgumentsError extends Error
{
  /**
   * Creates an instance.
   *
   * @since 0.2.0
   */
  constructor ()
  {
    super();

    this.message = "Invalid arguments.";
  }
}

module.exports = InvalidArgumentsError;
