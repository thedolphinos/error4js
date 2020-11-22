const utility = require("@thedolphinos/utility4js");

const BadRequestError = require("../BadRequestError");
const DATA = require("../../../DATA.json");

/**
 * Must be thrown when request body is required and missing.
 */
class BodyMissingError extends BadRequestError
{
  /**
   * @param {Object} [data] Contains status code other than default fields.
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.HTTP_217);

    super(data);
  }
}

module.exports = BodyMissingError;
