import utility from "@thedolphinos/utility4js";
import _ from "lodash";

import DeveloperError from "../core/DeveloperError";
import InvalidArgumentsError from "./InvalidArgumentsError";
import DATA from "../DATA.json";

/**
 * Must be thrown when the static class is initialized.
 */
class StaticClassInstantiationError extends DeveloperError
{
    /**
     * @param {string} [className]
     * @param {Object} [data]
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (className: string | undefined = undefined, data: {code: string, message: {[key: string]: string}} = DATA.DEV_2, ...args: any[])
    {
        data = utility.init(data, DATA.DEV_2);

        StaticClassInstantiationError._validateClassName(className);

        super(data, ...args);
        this._assignParametersIntoPlaceholders(className);
    }

    /* VALIDATE */
    /**
     * @param {string} className
     * @private
     */
    private static _validateClassName (className: string | undefined): void
    {
        if (utility.isExist(className) && !_.isString(className))
        {
            throw new InvalidArgumentsError();
        }
    }
}

export default StaticClassInstantiationError;