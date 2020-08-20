"use strict";

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request query string is required and missing.
 *
 * @since 0.9.0
 */
class QueryStringMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   *
   * @since 0.9.0
   */
  constructor ()
  {
    super("Request query string is missing.");
  }
}

module.exports = QueryStringMissingError;
