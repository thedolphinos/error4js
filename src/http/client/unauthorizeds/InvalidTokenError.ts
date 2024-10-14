import utility from "@thedolphinos/utility4js";
import UnauthorizedError from "../UnauthorizedError";
import DATA from "../../../DATA.json";

/**
 * Must be thrown when the token is invalid.
 */
class InvalidTokenError extends UnauthorizedError
{
    /**
     * @param {Object} [data] Contains status code other than default fields.
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {statusCode?: number, code: string, message: {[key: string]: string}} = DATA.HTTP_222, ...args: any[])
    {
        data = utility.init(data, DATA.HTTP_222);
        super(data, ...args);
    }
}

export default InvalidTokenError;
