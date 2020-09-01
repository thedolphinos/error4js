"use strict";

const ForbiddenError = require("../ForbiddenError");

/**
 * Must be thrown when the account is blocked.
 *
 * @since 0.13.0
 */
class TokenExpiredError extends ForbiddenError
{
  /**
   * Creates an instance.
   *
   * @since 0.13.0
   */
  constructor ()
  {
    super("Token was expired.");
  }
}

module.exports = TokenExpiredError;
