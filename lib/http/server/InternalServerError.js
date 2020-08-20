"use strict";

const HTTPError = require("../HTTPError");

/**
 * Must be thrown when an unexpected error is occurred.
 *
 * @since 0.8.0
 */
class InternalServerError extends HTTPError
{
  /**
   * Creates an instance.
   *
   * @since 0.8.0
   */
  constructor ()
  {
    super();

    this.statusCode = 500;
    this.message = "Internal server error.";
  }
}

module.exports = InternalServerError;
