"use strict";

const _ = require("lodash");

const InvalidArgumentsError = require("../../core/InvalidArgumentsError");
const HTTPError = require("../HTTPError");

/**
 * Must be thrown when the specified request query string parameter is required and missing.
 *
 * @since 0.9.0
 */
class QueryStringParameterMissingError extends HTTPError
{
  constructor (name)
  {
    super();

    if (!_.isString(name))
    {
      throw new InvalidArgumentsError();
    }

    this.statusCode = 400;
    this.message = `Request query string parameter (${name}) is missing.`;
  }
}

module.exports = QueryStringParameterMissingError;
