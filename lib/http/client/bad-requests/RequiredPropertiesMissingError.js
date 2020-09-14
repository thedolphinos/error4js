"use strict";

const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when the required properties are missing.
 *
 * @since 0.14.0
 */
class RequiredPropertiesMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   *
   * @since 0.14.0
   */
  constructor ()
  {
    super("Required properties are missing.");
  }
}

module.exports = RequiredPropertiesMissingError;
