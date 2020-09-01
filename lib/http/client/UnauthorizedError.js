"use strict";

const HTTPError = require("../../core/HTTPError");

/**
 * Must be thrown when there is a problem with the unauthorizeds.
 * May be used as a super class.
 *
 * @since 0.13.0
 */
class UnauthorizedError extends HTTPError
{
  /**
   * Creates an instance.
   *
   * @since 0.13.0
   * @param {string} [message]
   */
  constructor (message = "Unauthorized.")
  {
    super(401, message);
  }
}

module.exports = UnauthorizedError;
