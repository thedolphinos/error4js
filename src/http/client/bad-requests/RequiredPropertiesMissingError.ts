import utility from "@thedolphinos/utility4js";
import BadRequestError from "../BadRequestError";
import DATA from "../../../DATA.json";

/**
 * Must be thrown when the required properties are missing.
 */
class RequiredPropertiesMissingError extends BadRequestError
{
    /**
     * @param {Object} [data] Contains status code other than default fields.
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {statusCode?: number, code: string, message: {[key: string]: string}} = DATA.HTTP_219, ...args: any[])
    {
        data = utility.init(data, DATA.HTTP_219);
        super(data, ...args);
    }
}

export default RequiredPropertiesMissingError;
