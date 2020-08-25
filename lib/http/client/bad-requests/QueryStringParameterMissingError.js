"use strict";

const _ = require("lodash");

const InvalidArgumentsError = require("../../../developer/InvalidArgumentsError");
const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when the specified request query string parameter is required and missing.
 *
 * @since 0.9.0
 */
class QueryStringParameterMissingError extends BadRequestError
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

    super(`Request query string parameter (${name}) is missing.`);
  }
}

module.exports = QueryStringParameterMissingError;
