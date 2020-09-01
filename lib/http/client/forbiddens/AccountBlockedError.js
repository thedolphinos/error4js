"use strict";

const InvalidArgumentsError = require("../../../developer/InvalidArgumentsError");
const ForbiddenError = require("../ForbiddenError");

/**
 * Must be thrown when the account is blocked.
 *
 * @since 0.13.0
 */
class AccountBlockedError extends ForbiddenError
{
  /**
   * Creates an instance.
   *
   * @since 0.13.0
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
