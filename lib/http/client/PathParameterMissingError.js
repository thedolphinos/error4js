"use strict";

const _ = require("lodash");

const InvalidArgumentsError = require("../../core/InvalidArgumentsError");
const HTTPError = require("../HTTPError");

/**
 * Must be thrown when the specified request path parameter is required and missing.
 *
 * @since 0.9.0
 */
class PathParameterMissingError extends HTTPError
{
  /**
   * @since 0.9.0
   * @param {string} name
   */
  constructor (name)
  {
    if (!_.isString(name))
    {
      throw new InvalidArgumentsError();
    }

    super();

    this.statusCode = 400;
    this.message = `Request path parameter (${name}) is missing.`;
  }
}

module.exports = PathParameterMissingError;
