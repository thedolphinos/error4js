"use strict";

const HTTPError = require("../../core/HTTPError");

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
   * @param {string} [message]
   */
  constructor (message = "Bad request.")
  {
    super(400, message);
  }
}

module.exports = BadRequestError;
