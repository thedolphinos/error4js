const utility = require("@thedolphinos/utility4js");

const UnauthorizedError = require("../UnauthorizedError");
const DATA = require("../../../DATA.json");

/**
 * Must be thrown when authorization credentials are invalid.
 */
class InvalidCredentialsError extends UnauthorizedError
{
  /**
   * @param {Object} [data] Contains status code other than default fields.
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (data = undefined, ...args)
  {
    data = utility.init(data, DATA.HTTP_221);

    super(data, ...args);
  }
}

module.exports = InvalidCredentialsError;
