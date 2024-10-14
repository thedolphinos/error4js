import utility from "@thedolphinos/utility4js";
import InvalidArgumentsError from "../../developer/InvalidArgumentsError";
import ClientError from "../ClientError";
import DATA from "../../DATA.json";

const DEFAULT_STATUS_CODE = 403;

/**
 * Must be thrown when there is a problem with authorization to perform the requested operation on the given resource.
 * May be used as a super class.
 */
class ForbiddenError extends ClientError
{
    /**
     * @param {Object} [data] Contains status code other than default fields.
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {statusCode?: number, code: string, message: {[key: string]: string}} = DATA.HTTP_23, ...args: any[])
    {
        data = utility.init(data, DATA.HTTP_23);

        if (utility.isExist(data))
        {
            if (utility.isExist(data.statusCode))
            {
                ForbiddenError._validateStatusCode(data.statusCode);
            }
            else
            {
                data.statusCode = DEFAULT_STATUS_CODE;
            }
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
        ClientError._validateStatusCode(statusCode);

        const allowedStatusCodes = [DEFAULT_STATUS_CODE];

        if (!allowedStatusCodes.includes(statusCode))
        {
            throw new InvalidArgumentsError();
        }
    }
}

export default ForbiddenError;
