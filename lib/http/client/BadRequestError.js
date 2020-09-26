"use strict";

const HTTPError = require("../../core/HTTPError");

/**
 * Must be thrown when there is a problem with the request.
 * May be used as a super class.
 */
class BadRequestError extends HTTPError
{
  /**
   * Creates an instance.
   *
   * @param {string} [message]
   */
  constructor (message = "Bad request.")
  {
    super(400, message);
  }
}

module.exports = BadRequestError;
