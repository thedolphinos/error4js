import ServerError from "../ServerError";
import DATA from "../../DATA.json";

/**
 * Must be thrown when an unexpected error occurs.
 */
class InternalServerError extends ServerError
{
    type = "InternalServerError";

    /**
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (...args: any[])
    {
        super(DATA.HTTP_11, ...args);
    }
}

export default InternalServerError;
