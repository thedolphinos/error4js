const utility = require("@thedolphinos/utility4js");

/**
 * Should be used as a super class for all core errors.
 */
class BaseError
{
  /**
   * @param {Object} [message]
   * @param {string} [language]
   */
  constructor (message = undefined, language = undefined)
  {
    message = utility.init(message, {});
    language = utility.init(language, "en");

    if (!_.isPlainObject(message))
    {
      throw new Error("Invalid arguments."); // since invalid arguments error depends on base error, it cannot be thrown here.
    }

    for (const language in message)
    {
      if (!_.isString(message[language]))
      {
        throw new Error("Invalid arguments."); // since invalid arguments error depends on base error, it cannot be thrown here.
      }
    }

    this._message = message;
    this._language = language;
    this._callStack = new Error().stack;
  }

  /**
   * @param {string} [language]
   * @return {*}
   */
  message (language = undefined)
  {
    language = utility.init(language, this._language);

    if (!_.isString(language))
    {
      throw new Error("Invalid arguments."); // since invalid arguments error depends on base error, it cannot be thrown here.
    }

    return this._message[language];
  }

  /* GET/SET */
  /**
   * @return {string}
   */
  get language ()
  {
    return this._language;
  }

  /**
   * @param {string} language
   */
  set language (language)
  {
    this._language = language;
  }

  /**
   * @return {string}
   */
  get callStack ()
  {
    return this._callStack;
  }
}

module.exports = BaseError;
