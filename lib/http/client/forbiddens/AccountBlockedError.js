"use strict";

const InvalidArgumentsError = require("../../../developer/InvalidArgumentsError");
const ForbiddenError = require("../ForbiddenError");

/**
 * Must be thrown when the account is blocked.
 */
class AccountBlockedError extends ForbiddenError
{
  /**
   * Creates an instance.
   */
  constructor (when)
  {
    if (!_.isString(when))
    {
      throw new InvalidArgumentsError();
    }

    super(`Account ${when} blocked.`);
  }
}

module.exports = AccountBlockedError;
