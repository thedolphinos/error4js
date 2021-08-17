const utility = require("@thedolphinos/utility4js");

const _ = require("lodash");

const InvalidArgumentsError = require("../../../developer/InvalidArgumentsError");
const BadRequestError = require("../BadRequestError");
const DATA = require("../../../DATA.json");

/**
 * Must be thrown when the specified request query string parameter is required and missing.
 */
class QueryStringParameterMissingError extends BadRequestError
{
  /**
   * @param {string} [name]
   * @param {Object} [data] Contains status code other than default fields.
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (name = undefined, data = undefined, ...args)
  {
    data = utility.init(data, DATA.HTTP_216);

    QueryStringParameterMissingError._validateName(name);

    super(data, ...args);
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

module.exports = QueryStringParameterMissingError;
