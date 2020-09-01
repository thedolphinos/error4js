"use strict";

const UnauthorizedError = require("../UnauthorizedError");

/**
 * Must be thrown when authorization credentials are invalid.
 *
 * @since 0.13.0
 */
class InvalidCredentialsError extends UnauthorizedError
{
  /**
   * Creates an instance.
   *
   * @since 0.13.0
   */
  constructor ()
  {
    super("Invalid credentials.");
  }
}

module.exports = InvalidCredentialsError;
