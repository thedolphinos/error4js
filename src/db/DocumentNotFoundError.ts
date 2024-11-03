import utility from "@thedolphinos/utility4js";
import DbError from "../core/DbError";
import DATA from "../DATA.json";

/**
 * Must be thrown when the queried document is not found.
 */
class DocumentNotFoundError extends DbError
{
    /**
     * @param {Object} [data]
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {code: string, message: {[key: string]: string}} = DATA.DB_1, ...args: any[])
    {
        data = utility.init(data, DATA.DB_1);
        super(data, ...args);
    }
}

export default DocumentNotFoundError;