"use strict";

/**
 * Must be used as a super class for an error which must be thrown as an HTTP response.
 *
 * @since 0.6.0
 */
class HTTPError
{
  /**
   * @since 0.6.0
   * @type {number}
   */
  statusCode;

  /**
   * @since 0.6.0
   * @type {string}
   */
  message;
}

module.exports = HTTPError;
