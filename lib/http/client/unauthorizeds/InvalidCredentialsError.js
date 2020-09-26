"use strict";

const UnauthorizedError = require("../UnauthorizedError");

/**
 * Must be thrown when authorization credentials are invalid.
 */
class InvalidCredentialsError extends UnauthorizedError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("Invalid credentials.");
  }
}

module.exports = InvalidCredentialsError;
