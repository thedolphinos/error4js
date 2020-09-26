"use strict";

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request headers are required and missing.
 */
class HeadersMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("Request headers is missing.");
  }
}

module.exports = HeadersMissingError;
