const BaseError = require("../core/BaseError");

/**
 * Must be used as a super class for custom errors.
 */
class CustomError extends BaseError
{
  /**
   * @param {Object} data
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (data, ...args)
  {
    super(data);
    this._assignParametersIntoPlaceholders(...args);
  }
}

module.exports = CustomError;
