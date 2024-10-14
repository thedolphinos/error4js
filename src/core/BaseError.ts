import {isExist, isInitialized} from "@thedolphinos/utility4js";
import DATA from "../DATA.json";

const DEFAULT_LANGUAGE = "en";

/**
 * Should be used as a super class for all core errors.
 */
class BaseError
{
    protected _code: string;
    protected _message: {[key: string]: string};
    protected _callStack: string;

    /**
     * @param {Object} [data]
     * @param {*} [args] Parameters will be used assigned into placeholders.
     */
    constructor (data: {code: string, message: {[key: string]: string}} = DATA.BASE, ...args: any[])
    {
        this._code = data.code;
        this._message = data.message;
        this._callStack = new Error().stack || "";

        if (isInitialized(args))
        {
            this._assignParametersIntoPlaceholders(...args);
        }
    }

    /**
     * @param {string} [language]
     * @return {*}
     */
    getMessage (language: string = DEFAULT_LANGUAGE): string
    {
        return this._message[language];
    }

    /**
     * Replaces the placeholders in the message with the arguments respectively.
     *
     * @param {*} args
     * @protected
     */
    protected _assignParametersIntoPlaceholders (...args: any[]): void
    {
        if (isExist(arguments))
        {
            for (const language in this._message)
            {
                for (let i = 0; i < arguments.length; i++)
                {
                    this._message[language] = this._message[language].replace(`$${i}`, arguments[i]);
                }
            }
        }

        this._removePlaceholders();
    }

    /**
     * Removes the placeholders
     *
     * @private
     */
    private _removePlaceholders (): void
    {
        for (const language in this._message)
        {
            this._message[language] = this._message[language].replace(/ \$([0-9]+)/gi, "");
        }
    }

    /* GET/SET */
    /**
     * @return {string}
     */
    get code (): string
    {
        return this._code;
    }

    /**
     * @returns {Object}
     */
    get message (): {[key: string]: string}
    {
        return this._message;
    }

    /**
     * @return {string}
     */
    get callStack (): string
    {
        return this._callStack;
    }
}

export default BaseError;
