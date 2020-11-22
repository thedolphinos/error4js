const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const BadRequestError = require("../BadRequestError");
const InvalidArgumentsError = require("../../../developer/InvalidArgumentsError");
const DATA = require("../../../DATA.json");

/**
 * Must be thrown when the specified request body parameter is required and missing.
 */
class BodyParameterMissingError extends BadRequestError
{
  /**
   * @param {string} [name]
   * @param {Object} [data] Contains status code other than default fields.
   */
  constructor (name = undefined, data = undefined)
  {
    data = utility.init(data, DATA.HTTP_218);

    BodyParameterMissingError._validateName(name);

    super(data);
    this._assignParametersIntoPlaceholders(name);
  }

  /* VALIDATE */
  /**
   * @param {string} name
   * @private
   */
  static _validateName (name)
  {
    if (utility.isExist(name) && !_.isString(name))
    {
      throw new InvalidArgumentsError();
    }
  }
}

module.exports = BodyParameterMissingError;