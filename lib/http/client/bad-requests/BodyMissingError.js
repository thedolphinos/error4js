"use strict";

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when request body is required and missing.
 */
class BodyMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("Request body is missing.");
  }
}

module.exports = BodyMissingError;
