"use strict";

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request headers are required and missing.
 *
 * @since 0.9.0
 */
class HeadersMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   *
   * @since 0.9.0
   */
  constructor ()
  {
    super("Request headers is missing.");
  }
}

module.exports = HeadersMissingError;
