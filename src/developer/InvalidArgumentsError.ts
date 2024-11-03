import DeveloperError from "../core/DeveloperError";
import DATA from "../DATA.json";

/**
 * Must be thrown when the arguments of a function/method/constructor are invalid.
 */
class InvalidArgumentsError extends DeveloperError
{
    /**
     * @param {Object} [data]
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {code: string, message: {[key: string]: string}} = DATA.DEV_1, ...args: any[])
    {
        super(data, ...args);
    }
}

export default InvalidArgumentsError;
