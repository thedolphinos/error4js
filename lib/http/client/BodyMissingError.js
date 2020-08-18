"use strict";

const HTTPError = require("../HTTPError");

/**
 * Must be thrown when request body is required and missing.
 *
 * @since 0.6.0
 */
class BodyMissingError extends HTTPError
{
  /**
   * @since 0.6.0
   */
  constructor ()
  {
    super();

    this.statusCode = 400;
    this.message = "Request body is missing.";
  }
}

module.exports = BodyMissingError;
