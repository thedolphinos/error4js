"use strict";

const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const InvalidArgumentsError = require("../developer/InvalidArgumentsError");

const VALID_HTTP_STATUS_CODES = Object.freeze({
                                                CLIENT_ERROR: [400, 401, 402, 403, 404, 405, 406, 407, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 422, 425, 426, 428, 429, 431, 451],
                                                SERVER_ERROR: [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511]
                                              });

/**
 * Should be used as a super class for an error which must be thrown as an HTTP response.
 *
 * @since 0.6.0
 */
class HTTPError
{
  /**
   * Creates an instance.
   *
   * @since 0.11.0
   * @param {number} statusCode
   * @param {string} message
   */
  constructor (statusCode, message)
  {
    this._validateStatusCodeForClientError(statusCode);
    this._validateStatusCodeForServerError(statusCode);

    if (!_.isString(message))
    {
      throw new InvalidArgumentsError();
    }

    this._statusCode = statusCode;
    this._message = message;
  }

  /**
   * Gets the HTTP error status code.
   *
   * @since 0.12.0
   * @returns {number}
   */
  get statusCode ()
  {
    return this._statusCode;
  }

  /**
   * Gets the HTTP error message.
   *
   * @since 0.12.0
   * @returns {string}
   */
  get message ()
  {
    return this._message;
  }

  /**
   * Validates the specified status code for HTTP client error.
   *
   * @param {number} statusCode
   * @protected
   */
  _validateStatusCodeForClientError (statusCode)
  {
    if (!utility.isValidNumber(statusCode) || !VALID_HTTP_STATUS_CODES.CLIENT_ERROR.includes(statusCode))
    {
      throw new InvalidArgumentsError();
    }
  }

  /**
   * Validates the specified status code for HTTP server error.
   *
   * @param {number} statusCode
   * @protected
   */
  _validateStatusCodeForServerError (statusCode)
  {
    if (!utility.isValidNumber(statusCode) || !VALID_HTTP_STATUS_CODES.SERVER_ERROR.includes(statusCode))
    {
      throw new InvalidArgumentsError();
    }
  }
}

module.exports = HTTPError;