"use strict";

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when the required properties are missing.
 */
class RequiredPropertiesMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super("Required properties are missing.");
  }
}

module.exports = RequiredPropertiesMissingError;
