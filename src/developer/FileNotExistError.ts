import utility from "@thedolphinos/utility4js";
import DeveloperError from "../core/DeveloperError";
import DATA from "../DATA.json";

/**
 * Must be thrown when the file does not exist.
 */
class FileNotExistError extends DeveloperError
{
    /**
     * @param {Object} [data]
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {code: string, message: {[key: string]: string}} = DATA.DEV_3, ...args: any[])
    {
        data = utility.init(data, DATA.DEV_3);
        super(data, ...args);
    }
}

export default FileNotExistError;
