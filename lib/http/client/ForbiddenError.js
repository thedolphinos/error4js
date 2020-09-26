"use strict";

const HTTPError = require("../../core/HTTPError");

/**
 * Must be thrown when there authentication is successful but there is a problem with authorization to perform the requested operation on the given resource.
 * May be used as a super class.
 */
class ForbiddenError extends HTTPError
{
  /**
   * Creates an instance.
   *
   * @param {string} [message]
   */
  constructor (message = "Forbidden.")
  {
    super(403, message);
  }
}

module.exports = ForbiddenError;
