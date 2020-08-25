"use strict";

const HTTPError = require("../core/HTTPError");

/**
 * Should be used as a super class for an error which must be thrown when there is a problem with the server.
 *
 * @since 0.12.0
 */
class ServerError extends HTTPError
{
  /**
   * Creates an instance.
   *
   * @since 0.12.0
   * @param {number} statusCode
   * @param {string} message
   */
  constructor (statusCode, message)
  {
    super(statusCode, message);
    this._validateStatusCodeForServerError(statusCode);
  }
}

module.exports = ServerError;
