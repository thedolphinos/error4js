import utility from "@thedolphinos/utility4js";
import BadRequestError from "../BadRequestError";
import DATA from "../../../DATA.json";

/**
 * Must be thrown when request path parameters are required and missing.
 */
class PathParametersMissingError extends BadRequestError
{
    /**
     * @param {Object} [data] Contains status code other than default fields.
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {statusCode?: number, code: string, message: {[key: string]: string}} = DATA.HTTP_213, ...args: any[])
    {
        data = utility.init(data, DATA.HTTP_213);
        super(data, ...args);
    }
}

export default PathParametersMissingError;
