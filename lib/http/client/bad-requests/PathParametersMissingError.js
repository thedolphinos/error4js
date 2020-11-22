const utility = require("@thedolphinos/utility4js");

const BadRequestError = require("../BadRequestError");
const DATA = require("../../../DATA.json");

/**
 * Must be thrown when request path parameters are required and missing.
 */
class PathParametersMissingError extends BadRequestError
{
  /**
   * @param {Object} [data] Contains status code other than default fields.
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.HTTP_213);

    super(data);
  }
}

module.exports = PathParametersMissingError;
