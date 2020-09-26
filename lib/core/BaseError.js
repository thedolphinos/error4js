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
    this._callStack = new Error().stack;
  }

  /* GET/SET */
  /**
   * @return {string}
   */
  get callStack ()
  {
    return this._callStack;
  }
}

module.exports = BaseError;
