"use strict";

const utility = require("@thedolphinos/utility4js");

class StaticClassInstantiationError extends Error
{
  constructor (className)
  {
    super();

    this.message = `Static class ${utility.isExist(className) ? `(${className})` : ""} cannot be instantiated.`;
  }
}

module.exports = StaticClassInstantiationError;
