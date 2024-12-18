import BadRequestError from "../BadRequestError";
import DATA from "../../../DATA.json";

/**
 * Must be thrown when request headers are required and missing.
 */
class HeadersMissingError extends BadRequestError
{
    /**
     * @param {Object} [data] Contains status code other than default fields.
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {statusCode?: number, code: string, message: {[key: string]: string}} = DATA.HTTP_211, ...args: any[])
    {
        super(data, ...args);
    }
}

export default HeadersMissingError;
