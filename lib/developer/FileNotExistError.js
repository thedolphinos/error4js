const utility = require("@thedolphinos/utility4js");

const DeveloperError = require("../core/DeveloperError");

/**
 * Must be thrown when the file is not exist.
 */
class FileNotExistError extends DeveloperError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "File is not exist."});

    super(message);
  }
}

module.exports = FileNotExistError;
