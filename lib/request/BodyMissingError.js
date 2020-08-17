"use strict";

const RequestError = require("./RequestError");

/**
 * Must be thrown when request body is required and missing.
 *
 * @since 0.6.0
 */
class BodyMissingError extends RequestError
{
  constructor ()
  {
    super();

    this.statusCode = 400;
    this.message = "Request body is missing.";
  }
}

module.exports = BodyMissingError;
