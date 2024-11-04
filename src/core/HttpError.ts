import {isExist, isValidNumber} from "@thedolphinos/utility4js";

import BaseError from "./BaseError";
import InvalidArgumentsError from "../developer/InvalidArgumentsError";
import DATA from "../DATA.json";

/**
 * Should be used as a super class for an error which should be thrown as an HTTP response.
 */
class HttpError extends BaseError
{
    protected static type: string = "HttpError";

    private _statusCode?: number;

    /**
     * @param {Object} [data] Contains status code other than default fields.
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {statusCode?: number, code: string, message: {[key: string]: string}} = DATA.HTTP_0, ...args: any[])
    {
        if (isExist(data) && isExist(data.statusCode))
        {
            HttpError._validateStatusCode(data.statusCode);
        }

        super(data, ...args);

        if (isExist(data) && isExist(data.statusCode))
        {
            this._statusCode = data.statusCode;
        }
    }

    /* GET/SET */
    /**
     * @returns {number | undefined}
     */
    get statusCode (): number | undefined
    {
        return this._statusCode;
    }

    /* VALIDATE */
    /**
     * @param {number} statusCode
     * @protected
     */
    protected static _validateStatusCode (statusCode: number): void
    {
        if (!isValidNumber(statusCode))
        {
            throw new InvalidArgumentsError();
        }
    }
}

export default HttpError;
