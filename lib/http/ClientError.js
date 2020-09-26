"use strict";

const HTTPError = require("../core/HTTPError");

/**
 * Should be used as a super class for an error which must be thrown when there is a problem with the client.
 */
class ClientError extends HTTPError
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
    this._validateStatusCodeForClientError(statusCode);
  }
}

module.exports = ClientError;
