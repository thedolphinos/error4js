"use strict";

const _ = require("lodash");

const InvalidArgumentsError = require("../../../developer/InvalidArgumentsError");
const BadRequestError = require("../BadRequestError");

/**
 * Must be thrown when the specified request path parameter is required and missing.
 */
class PathParameterMissingError extends BadRequestError
{
  /**
   * Creates an instance.
   *
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
