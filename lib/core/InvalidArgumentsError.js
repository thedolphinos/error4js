"use strict";

class InvalidArgumentsError extends Error
{
  constructor ()
  {
    super();

    this.message = "Invalid arguments.";
  }
}

module.exports = InvalidArgumentsError;
