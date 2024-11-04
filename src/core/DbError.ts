import BaseError from "./BaseError";
import DATA from "../DATA.json";

/**
 * Should be used as a super class for an error which is caused at the database level.
 */
class DbError extends BaseError
{
    type = "DbError";

    /**
     * @param {Object} [data]
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {code: string, message: {[key: string]: string}} = DATA.DB_0, ...args: any[])
    {
        super(data, ...args);
    }
}

export default DbError;
