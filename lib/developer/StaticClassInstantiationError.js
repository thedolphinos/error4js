"use strict";

const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const DeveloperError = require("../core/DeveloperError");
const InvalidArgumentsError = require("./InvalidArgumentsError");

/**
 * Must be thrown when a static class is initialized.
 *
 * @since 0.3.0
 */
class StaticClassInstantiationError extends DeveloperError
{
  /**
   * Creates an instance.
   *
   * @since 0.3.0
   * @param {string} [className]
   */
  constructor (className = null)
  {
    if (utility.isExist(className) && !_.isString(className))
    {
      throw new InvalidArgumentsError();
    }

    super(`Static class ${utility.isExist(className) ? `(${className})` : ""} cannot be instantiated.`);
  }
}

module.exports = StaticClassInstantiationError;
