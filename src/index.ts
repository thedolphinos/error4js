import BaseError from "./core/BaseError";

import DeveloperError from "./core/DeveloperError";
import InvalidArgumentsError from "./developer/InvalidArgumentsError";
import StaticClassInstantiationError from "./developer/StaticClassInstantiationError";
import FileNotExistError from "./developer/FileNotExistError";
import DirectoryNotExistError from "./developer/DirectoryNotExistError";

import DbError from "./core/DbError";
import DocumentNotFoundError from "./db/DocumentNotFoundError";
import MoreThan1DocumentFoundError from "./db/MoreThan1DocumentFoundError";

import HTTPError from "./core/HTTPError";

import ServerError from "./http/ServerError"; // 500s
import ClientError from "./http/ClientError"; // 400s

import InternalServerError from "./http/server/InternalServerError"; // 500

import BadRequestError from "./http/client/BadRequestError"; // 400
import UnauthorizedError from "./http/client/UnauthorizedError"; // 401
import ForbiddenError from "./http/client/ForbiddenError"; // 403

/* 400 */
import HeadersMissingError from "./http/client/bad-requests/HeadersMissingError";
import HeaderParameterMissingError from "./http/client/bad-requests/HeaderParameterMissingError";
import PathParametersMissingError from "./http/client/bad-requests/PathParametersMissingError";
import PathParameterMissingError from "./http/client/bad-requests/PathParameterMissingError";
import QueryStringMissingError from "./http/client/bad-requests/QueryStringMissingError";
import QueryStringParameterMissingError from "./http/client/bad-requests/QueryStringParameterMissingError";
import BodyMissingError from "./http/client/bad-requests/BodyMissingError";
import BodyParameterMissingError from "./http/client/bad-requests/BodyParameterMissingError";
import RequiredPropertiesMissingError from "./http/client/bad-requests/RequiredPropertiesMissingError";

/* 401 */
import InvalidCredentialsError from "./http/client/unauthorizeds/InvalidCredentialsError";
import InvalidTokenError from "./http/client/unauthorizeds/InvalidTokenError";
import TokenExpiredError from "./http/client/forbiddens/TokenExpiredError";
import AccountBlockedError from "./http/client/forbiddens/AccountBlockedError";

/* 403 */

import DATA from "./DATA.json";

export {
    BaseError,

    DeveloperError,
    InvalidArgumentsError,
    StaticClassInstantiationError,
    FileNotExistError,
    DirectoryNotExistError,

    DbError,
    DocumentNotFoundError,
    MoreThan1DocumentFoundError,

    HTTPError,

    ServerError, // 500s
    ClientError, // 400s

    InternalServerError, // 500

    BadRequestError, // 400
    UnauthorizedError, // 401
    ForbiddenError, // 403

    /* 400 */
    HeadersMissingError,
    HeaderParameterMissingError,
    PathParametersMissingError,
    PathParameterMissingError,
    QueryStringMissingError,
    QueryStringParameterMissingError,
    BodyMissingError,
    BodyParameterMissingError,
    RequiredPropertiesMissingError,

    /* 401 */
    InvalidCredentialsError,
    InvalidTokenError,
    TokenExpiredError,
    AccountBlockedError,

    /* 403 */

    DATA
};
