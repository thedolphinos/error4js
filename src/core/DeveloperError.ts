import utility from "@thedolphinos/utility4js";
import BaseError from "./BaseError";
import DATA from "../DATA.json";

/**
 * Should be used as a super class for an error which is caused by developers.
 */
class DeveloperError extends BaseError
{
    /**
     * @param {Object} [data]
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {code: string, message: {[key: string]: string}} = DATA.DEV_0, ...args: any[])
    {
        data = utility.init(data, DATA.DEV_0);
        super(data, ...args);
    }
}

export default DeveloperError;
