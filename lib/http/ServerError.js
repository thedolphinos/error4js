"use strict";

const HTTPError = require("../core/HTTPError");

/**
 * Should be used as a super class for an error which must be thrown when there is a problem with the server.
 */
class ServerError extends HTTPError
{
  /**
   * Creates an instance.
   *
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
