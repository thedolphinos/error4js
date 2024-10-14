import utility from "@thedolphinos/utility4js";
import InvalidArgumentsError from "../developer/InvalidArgumentsError";
import HTTPError from "../core/HTTPError";
import DATA from "../DATA.json";

/**
 * Should be used as a super class for an error which must be thrown when there is a server error.
 */
class ServerError extends HTTPError
{
    /**
     * @param {Object} [data] Contains status code other than default fields.
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {statusCode?: number, code: string, message: {[key: string]: string}} = DATA.HTTP_10, ...args: any[])
    {
        data = utility.init(data, DATA.HTTP_10);

        if (utility.isExist(data) && utility.isExist(data.statusCode))
        {
            ServerError._validateStatusCode(data.statusCode);
        }

        super(data, ...args);
    }

    /* VALIDATE */
    /**
     * @param {number} statusCode
     * @protected
     */
    protected static _validateStatusCode (statusCode: number): void
    {
        HTTPError._validateStatusCode(statusCode);

        const allowedStatusCodes = [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511];

        if (!allowedStatusCodes.includes(statusCode))
        {
            throw new InvalidArgumentsError();
        }
    }
}

export default ServerError;
