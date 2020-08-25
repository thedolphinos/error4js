"use strict";

const ServerError = require("../ServerError");

/**
 * Must be thrown when an unexpected error is occurred.
 *
 * @since 0.8.0
 */
class InternalServerError extends ServerError
{
  /**
   * Creates an instance.
   *
   * @since 0.8.0
   */
  constructor ()
  {
    super(500, "Internal server error.");
  }
}

module.exports = InternalServerError;
