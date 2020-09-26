"use strict";

const UnauthorizedError = require("../UnauthorizedError");

/**
 * Must be thrown when the token is invalid.
 */
class InvalidTokenError extends UnauthorizedError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("Invalid token.");
  }
}

module.exports = InvalidTokenError;
