import BadRequestError from "../BadRequestError";
import DATA from "../../../DATA.json";

/**
 * Must be thrown when the request body is required and missing.
 */
class BodyMissingError extends BadRequestError
{
    /**
     * @param {Object} [data] Contains status code other than default fields.
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {statusCode?: number, code: string, message: {[key: string]: string}} = DATA.HTTP_217, ...args: any[])
    {
        super(data, ...args);
    }
}

export default BodyMissingError;
