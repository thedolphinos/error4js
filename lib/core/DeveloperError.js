"use strict";

const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const BaseError = require("./BaseError");

/**
 * Should be used as a super class for an error which are caused by developers.
 */
class DeveloperError extends BaseError
{
  /**
   * Creates an instance.
   *
   * @param {string} [message]
   */
  constructor (message = null)
  {
    super();

    if (utility.isExist(message) && !_.isString(message))
    {
      throw new Error("Invalid arguments.");
    }

    this._message = message;
  }

  /**
   * Gets the message.
   *
   * @returns {string}
   */
  get message ()
  {
    return this._message;
  }
}

module.exports = DeveloperError;
