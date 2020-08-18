"use strict";

const HTTPError = require("../HTTPError");

/**
 * Must be thrown when request headers are required and missing.
 *
 * @since 0.9.0
 */
class HeadersMissingError extends HTTPError
{
  constructor ()
  {
    super();

    this.statusCode = 400;
    this.message = "Request headers is missing.";
  }
}

module.exports = HeadersMissingError;
