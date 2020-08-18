"use strict";

const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const InvalidArgumentsError = require("../core/InvalidArgumentsError");

/**
 * Must be thrown when a static class is initialized.
 *
 * @since 0.3.0
 */
class StaticClassInstantiationError extends Error
{
  /**
   * @since 0.3.0
   * @param {string} [className]
   */
  constructor (className)
  {
    if (utility.isExist(className) && !_.isString(className))
    {
      throw new InvalidArgumentsError();
    }

    super();

    this.message = `Static class ${utility.isExist(className) ? `(${className})` : ""} cannot be instantiated.`;
  }
}

module.exports = StaticClassInstantiationError;
