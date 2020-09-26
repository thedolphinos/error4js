"use strict";

/**
 * Should be used as a super class for all core errors which are developer, database, and HTTP errors..
 */
class BaseError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    this._stack = new Error().stack;
  }
}

module.exports = BaseError;
