"use strict";

const ServerError = require("../ServerError");

/**
 * Must be thrown when an unexpected error is occurred.
 */
class InternalServerError extends ServerError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super(500, "Internal server error.");
  }
}

module.exports = InternalServerError;
