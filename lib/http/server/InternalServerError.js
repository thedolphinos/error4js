const ServerError = require("../ServerError");
const DATA = require("../../DATA.json");

/**
 * Must be thrown when an unexpected error is occurred.
 */
class InternalServerError extends ServerError
{
  /**
   * Creates an instance.
   */
  constructor ()
  {
    super(DATA.HTTP_11);
  }
}

module.exports = InternalServerError;
