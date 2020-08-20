"use strict";

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request path parameters are required and missing.
 *
 * @since 0.9.0
 */
class PathParametersMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   *
   * @since 0.9.0
   */
  constructor ()
  {
    super("Request path parameters are missing.");
  }
}

module.exports = PathParametersMissingError;
