const utility = require("@thedolphinos/utility4js");

const DeveloperError = require("../core/DeveloperError");
const DATA = require("../DATA.json");

/**
 * Must be thrown when the directory is not exist.
 */
class DirectoryNotExistError extends DeveloperError
{
  /**
   * @param {Object} [data]
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.DEV_4);

    super(data);
  }
}

module.exports = DirectoryNotExistError;
