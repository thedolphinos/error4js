import {isExist} from "@thedolphinos/utility4js";

import InvalidArgumentsError from "../developer/InvalidArgumentsError";
import HTTPError from "../core/HTTPError";
import DATA from "../DATA.json";

/**
 * Should be used as a super class for an error which must be thrown when there is a client error.
 */
class ClientError extends HTTPError
{
    /**
     * @param {Object} [data] Contains status code other than default fields.
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {statusCode?: number, code: string, message: {[key: string]: string}} = DATA.HTTP_20, ...args: any[])
    {
        if (isExist(data) && isExist(data.statusCode))
        {
            ClientError._validateStatusCode(data.statusCode);
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

        const allowedStatusCodes = [400, 401, 402, 403, 404, 405, 406, 407, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 422, 425, 426, 428, 429, 431, 451];

        if (!allowedStatusCodes.includes(statusCode))
        {
            throw new InvalidArgumentsError();
        }
    }
}

export default ClientError;
