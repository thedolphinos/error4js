"use strict";

const ForbiddenError = require("../ForbiddenError");

/**
 * Must be thrown when the account is blocked.
 */
class TokenExpiredError extends ForbiddenError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("Token was expired.");
  }
}

module.exports = TokenExpiredError;
