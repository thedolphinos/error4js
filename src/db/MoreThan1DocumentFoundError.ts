import DbError from "../core/DbError";
import DATA from "../DATA.json";

/**
 * Must be thrown when there must be only 1 queried document, but there is more than 1.
 */
class MoreThan1DocumentFoundError extends DbError
{
    /**
     * @param {Object} [data]
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {code: string, message: {[key: string]: string}} = DATA.DB_2, ...args: any[])
    {
        super(data, ...args);
    }
}

export default MoreThan1DocumentFoundError;
