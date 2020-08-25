"use strict";

const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const InvalidArgumentsError = require("../developer/InvalidArgumentsError");

/**
 * Should be used as a super class for an error which are caused in database level.
 *
 * @since 0.12.0
 */
class DbError
{
  /**
   * Creates an instance.
   *
   * @since 0.12.0
   * @param {string} [message]
   */
  constructor (message = null)
  {
    if (utility.isExist(message) && !_.isString(message))
    {
      throw new InvalidArgumentsError();
    }

    this._message = message;
  }

  /**
   * Gets the message.
   *
   * @since 0.12.0
   * @returns {string}
   */
  get message ()
  {
    return this._message;
  }
}

module.exports = DbError;
