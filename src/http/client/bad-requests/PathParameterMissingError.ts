import utility from "@thedolphinos/utility4js";
import _ from "lodash";

import InvalidArgumentsError from "../../../developer/InvalidArgumentsError";
import BadRequestError from "../BadRequestError";
import DATA from "../../../DATA.json";

/**
 * Must be thrown when the specified request path parameter is required and missing.
 */
class PathParameterMissingError extends BadRequestError
{
    /**
     * @param {string} [name]
     * @param {Object} [data] Contains status code other than default fields.
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (name: string | undefined = undefined, data: {statusCode?: number, code: string, message: {[key: string]: string}} = DATA.HTTP_214, ...args: any[])
    {
        data = utility.init(data, DATA.HTTP_214);

        PathParameterMissingError._validateName(name);

        super(data, ...args);
        this._assignParametersIntoPlaceholders(name);
    }

    /* VALIDATE */
    /**
     * @param {string} name
     * @private
     */
    private static _validateName (name: string | undefined): void
    {
        if (utility.isExist(name) && !_.isString(name))
        {
            throw new InvalidArgumentsError();
        }
    }
}

export default PathParameterMissingError;