"use strict";

const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const InvalidArgumentsError = require("../core/InvalidArgumentsError");

/**
 * Should be used as a super class for an error which must be thrown as an HTTP response.
 *
 * @since 0.6.0
 */
class HTTPError
{
  /**
   * HTTP status code.
   *
   * @since 0.6.0
   * @type {number}
   */
  statusCode;

  /**
   * Description.
   *
   * @since 0.6.0
   * @type {string}
   */
  message;

  /**
   * Creates an instance.
   *
   * @since 0.11.0
   * @param {number} statusCode
   * @param {string} message
   */
  constructor (statusCode, message)
  {
    if (!utility.isValidNumber(statusCode) ||
        !_.isString(message))
    {
      throw new InvalidArgumentsError();
    }

    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = HTTPError;
