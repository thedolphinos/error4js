"use strict";

/**
 * Must be used as a super class for an error which must be thrown as a response.
 *
 * @since 0.6.0
 */
class RequestError
{
  statusCode;
  message;
}

module.exports = RequestError;
