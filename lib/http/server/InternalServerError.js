const ServerError = require("../ServerError");
const DATA = require("../../DATA.json");

/**
 * Must be thrown when an unexpected error is occurred.
 */
class InternalServerError extends ServerError
{
  /**
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (...args)
  {
    super(DATA.HTTP_11, ...args);
  }
}

module.exports = InternalServerError;
