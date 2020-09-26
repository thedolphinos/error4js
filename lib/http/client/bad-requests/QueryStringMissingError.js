"use strict";

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request query string is required and missing.
 */
class QueryStringMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("Request query string is missing.");
  }
}

module.exports = QueryStringMissingError;
