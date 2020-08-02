"use strict";

class InvalidArgumentsError extends Error
{
  message = "Invalid arguments.";

  constructor ()
  {
    super();
  }
}

module.exports = InvalidArgumentsError;
