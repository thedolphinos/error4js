"use strict";

/**
 * Must be used as a super class for an error which must be thrown as an HTTP response.
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
}

module.exports = HTTPError;
