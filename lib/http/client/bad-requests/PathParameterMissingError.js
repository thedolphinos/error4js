"use strict";

const _ = require("lodash");

const InvalidArgumentsError = require("../../../core/InvalidArgumentsError");
const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when the specified request path parameter is required and missing.
 *
 * @since 0.9.0
 */
class PathParameterMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   *
   * @since 0.9.0
   * @param {string} name
   */
  constructor (name)
  {
    if (!_.isString(name))
    {
      throw new InvalidArgumentsError();
    }

    super(`Request path parameter (${name}) is missing.`);
  }
}

module.exports = PathParameterMissingError;
