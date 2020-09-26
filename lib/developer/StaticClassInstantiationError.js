"use strict";

const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const DeveloperError = require("../core/DeveloperError");
const InvalidArgumentsError = require("./InvalidArgumentsError");

/**
 * Must be thrown when a static class is initialized.
 */
class StaticClassInstantiationError extends DeveloperError
{
  /**
   * Creates an instance.
   *
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
