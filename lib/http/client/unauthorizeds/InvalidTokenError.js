"use strict";

const UnauthorizedError = require("../UnauthorizedError");

/**
 * Must be thrown when the token is invalid.
 *
 * @since 0.13.0
 */
class InvalidTokenError extends UnauthorizedError
{
  /**
   * Creates an instance.
   *
   * @since 0.13.0
   */
  constructor ()
  {
    super("Invalid token.");
  }
}

module.exports = InvalidTokenError;
