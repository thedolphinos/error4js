const utility = require("@thedolphinos/utility4js");

const DeveloperError = require("../core/DeveloperError");
const DATA = require("../DATA.json");

/**
 * Must be thrown when the file is not exist.
 */
class FileNotExistError extends DeveloperError
{
  /**
   * @param {Object} [data]
   */
  constructor (data = undefined)
  {
    data = utility.init(data, DATA.DEV_3);

    super(data);
  }
}

module.exports = FileNotExistError;
