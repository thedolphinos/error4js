"use strict";

const HTTPError = require("../HTTPError");

/**
 * Must be thrown when request path parameters are required and missing.
 *
 * @since 0.9.0
 */
class PathParametersMissingError extends HTTPError
{
  constructor ()
  {
    super();

    this.statusCode = 400;
    this.message = "Request path parameters are missing.";
  }
}

module.exports = PathParametersMissingError;
