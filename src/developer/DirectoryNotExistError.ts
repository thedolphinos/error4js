import utility from "@thedolphinos/utility4js";
import DeveloperError from "../core/DeveloperError";
import DATA from "../DATA.json";

/**
 * Must be thrown when the directory does not exist.
 */
class DirectoryNotExistError extends DeveloperError
{
    /**
     * @param {Object} [data]
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {code: string, message: {[key: string]: string}} = DATA.DEV_4, ...args: any[])
    {
        data = utility.init(data, DATA.DEV_4);
        super(data, ...args);
    }
}

export default DirectoryNotExistError;
