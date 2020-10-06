const utility = require("@thedolphinos/utility4js");

const DeveloperError = require("../core/DeveloperError");

/**
 * Must be thrown when the directory is not exist.
 */
class DirectoryNotExistError extends DeveloperError
{
  /**
   * @param {Object} [message]
   */
  constructor (message = undefined)
  {
    message = utility.init(message, {en: "Directory is not exist."});

    super(message);
  }
}

module.exports = DirectoryNotExistError;
