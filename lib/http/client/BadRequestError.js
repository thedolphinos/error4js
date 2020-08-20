"use strict";

const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const InvalidArgumentsError = require("../../core/InvalidArgumentsError");
const HTTPError = require("../HTTPError");

/**
 * Must be thrown when there is a problem with the request.
 * May be used as a super class.
 *
 * @since 0.10.0
 */
class BadRequestError extends HTTPError
{
  /**
   * Creates an instance.
   *
   * @since 0.10.0
   * @param [message]
   */
  constructor (message = null)
  {
    if (utility.isExist(message) && !_.isString(message))
    {
      throw new InvalidArgumentsError();
    }

    super();

    this.statusCode = 400;
    this.message = `${utility.isExist(message) ? `${message}` : "Bad request."}`;
  }
}

module.exports = BadRequestError;
