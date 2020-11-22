const utility = require("@thedolphinos/utility4js");

const BadRequestError = require("../BadRequestError");
const DATA = require("../../../DATA.json");

/**
 * Must be thrown when the required properties are missing.
 */
class RequiredPropertiesMissingError extends BadRequestError
{
  /**
   * @param {Object} [data]
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.HTTP_219);

    super(data);
  }
}

module.exports = RequiredPropertiesMissingError;
