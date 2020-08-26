"use strict";

const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

/**
 * Should be used as a super class for an error which are caused by developers.
 *
 * @since 0.12.0
 */
class DeveloperError
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
      throw new Error("Invalid arguments.");
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

module.exports = DeveloperError;
