"use strict";

const utility = require("@thedolphinos/utility4js");

/**
 * Must be thrown when a static class is initialized.
 *
 * @since 0.3.0
 */
class StaticClassInstantiationError extends Error
{
  constructor (className)
  {
    super();

    this.message = `Static class ${utility.isExist(className) ? `(${className})` : ""} cannot be instantiated.`;
  }
}

module.exports = StaticClassInstantiationError;
