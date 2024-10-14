import utility from "@thedolphinos/utility4js";
import UnauthorizedError from "../UnauthorizedError";
import DATA from "../../../DATA.json";

/**
 * Must be thrown when the account is blocked.
 */
class AccountBlockedError extends UnauthorizedError
{
    /**
     * @param {Object} [data] Contains status code other than default fields.
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {statusCode?: number, code: string, message: {[key: string]: string}} = DATA.HTTP_224, ...args: any[])
    {
        data = utility.init(data, DATA.HTTP_224);
        super(data, ...args);
    }
}

export default AccountBlockedError;
