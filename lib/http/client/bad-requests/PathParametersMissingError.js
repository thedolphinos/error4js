"use strict";

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request path parameters are required and missing.
 */
class PathParametersMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("Request path parameters are missing.");
  }
}

module.exports = PathParametersMissingError;
