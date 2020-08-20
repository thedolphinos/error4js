"use strict";

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request body is required and missing.
 *
 * @since 0.6.0
 */
class BodyMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   *
   * @since 0.6.0
   */
  constructor ()
  {
    super("Request body is missing.");
  }
}

module.exports = BodyMissingError;
