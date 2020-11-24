const utility = require("@thedolphinos/utility4js");
const _ = require("lodash");

const DATA = require("../DATA.json");

const DEFAULT_LANGUAGE = "en";

/**
 * Should be used as a super class for all core errors.
 */
class BaseError
{
  /**
   * @param {Object} [data]
   * @param {*} [args] Parameters will be used assigned into placeholders.
   */
  constructor (data = undefined, ...args)
  {
    data = utility.init(data, DATA.BASE);

    BaseError._validateData(data);

    this._code = data.code;
    this._message = data.message;
    this._callStack = new Error().stack;

    if (utility.isInitialized(args))
    {
      this._assignParametersIntoPlaceholders(...args);
    }
  }

  /**
   * @param {string} [language]
   * @return {*}
   */
  getMessage (language = undefined)
  {
    language = utility.init(language, DEFAULT_LANGUAGE);

    if (!_.isString(language))
    {
      throw new Error("Invalid arguments."); // since invalid arguments error depends on base error, it cannot be thrown here.
    }

    return this._message[language];
  }

  /**
   * Replaces the placeholders in the message with the arguments respectively.
   *
   * @param {*} args
   * @protected
   */
  _assignParametersIntoPlaceholders (args)
  {
    if (utility.isExist(arguments))
    {
      for (const language in this._message)
      {
        for (let i = 0; i < arguments.length; i++)
        {
          this._message[language] = this._message[language].replace(`$${i}`, arguments[i]);
        }
      }
    }

    this._removePlaceholders();
  }

  /**
   * Removes the placeholders
   *
   * @private
   */
  _removePlaceholders ()
  {
    for (const language in this._message)
    {
      this._message[language] = this._message[language].replace(/ \$([0-9]+)/gi, "");
    }
  }

  /* GET/SET */
  /**
   * @return {string}
   */
  get code ()
  {
    return this._code;
  }

  /**
   * @return {string}
   */
  get callStack ()
  {
    return this._callStack;
  }

  /* VALIDATE */
  /**
   * @param {Object} data
   * @param {string} data.code
   * @param {Object} data.message
   * @private
   */
  static _validateData (data)
  {
    if (!_.isPlainObject(data) ||
        !_.isPlainObject(data.message) ||
        !_.isString(data.code))
    {
      throw new Error("Invalid arguments."); // since invalid arguments error depends on base error, it cannot be thrown here.
    }

    for (const language in data.message)
    {
      if (!_.isString(data.message[language]))
      {
        throw new Error("Invalid arguments."); // since invalid arguments error depends on base error, it cannot be thrown here.
      }
    }
  }
}

module.exports = BaseError;
