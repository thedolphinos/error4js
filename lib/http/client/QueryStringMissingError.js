"use strict";

const HTTPError = require("../HTTPError");

/**
 * Must be thrown when request query string is required and missing.
 *
 * @since 0.9.0
 */
class QueryStringMissingError extends HTTPError
{
  /**
   * @since 0.9.0
   */
  constructor ()
  {
    super();

    this.statusCode = 400;
    this.message = "Request query string is missing.";
  }
}

module.exports = QueryStringMissingError;
