"use strict";

const HTTPError = require("../../core/HTTPError");

/**
 * Must be thrown when there is a problem with the unauthorizeds.
 * May be used as a super class.
 */
class UnauthorizedError extends HTTPError
{
  /**
   * Creates an instance.
   *
   * @param {string} [message]
   */
  constructor (message = "Unauthorized.")
  {
    super(401, message);
  }
}

module.exports = UnauthorizedError;
