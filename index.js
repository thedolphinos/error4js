"use strict";

const BaseError = require("./lib/core/BaseError");

const DeveloperError = require("./lib/core/DeveloperError");
const InvalidArgumentsError = require("./lib/developer/InvalidArgumentsError");
const StaticClassInstantiationError = require("./lib/developer/StaticClassInstantiationError");
const FileNotExistError = require("./lib/developer/FileNotExistError");
const DirectoryNotExistError = require("./lib/developer/DirectoryNotExistError");

const DbError = require("./lib/core/DbError");
const DocumentNotFoundError = require("./lib/db/DocumentNotFoundError");
const MoreThan1DocumentFoundError = require("./lib/db/MoreThan1DocumentFoundError");

const HTTPError = require("./lib/core/HTTPError");

const ServerError = require("./lib/http/ServerError"); //  500s
const ClientError = require("./lib/http/ClientError"); //  400s

const InternalServerError = require("./lib/http/server/InternalServerError"); // 500
const BadRequestError = require("./lib/http/client/BadRequestError"); // 400
const UnauthorizedError = require("./lib/http/client/UnauthorizedError"); // 401
const ForbiddenError = require("./lib/http/client/ForbiddenError"); // 403

/* 400 */
const HeadersMissingError = require("./lib/http/client/bad-requests/HeadersMissingError");
const PathParametersMissingError = require("./lib/http/client/bad-requests/PathParametersMissingError");
const PathParameterMissingError = require("./lib/http/client/bad-requests/PathParameterMissingError");
const QueryStringMissingError = require("./lib/http/client/bad-requests/QueryStringMissingError");
const QueryStringParameterMissingError = require("./lib/http/client/bad-requests/QueryStringParameterMissingError");
const BodyMissingError = require("./lib/http/client/bad-requests/BodyMissingError");
const RequiredPropertiesMissingError = require("./lib/http/client/bad-requests/RequiredPropertiesMissingError");

/* 401 */
const InvalidCredentialsError = require("./lib/http/client/unauthorizeds/InvalidCredentialsError");
const InvalidTokenError = require("./lib/http/client/unauthorizeds/InvalidTokenError");

/* 403 */
const AccountBlockedError = require("./lib/http/client/forbiddens/AccountBlockedError");
const TokenExpiredError = require("./lib/http/client/forbiddens/TokenExpiredError");

module.exports = {
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

  ServerError, //  500s
  ClientError, //  400s

  InternalServerError, // 500
  BadRequestError, // 400
  UnauthorizedError, // 401
  ForbiddenError, // 403

  /* 400 */
  HeadersMissingError,
  PathParametersMissingError,
  PathParameterMissingError,
  QueryStringMissingError,
  QueryStringParameterMissingError,
  BodyMissingError,
  RequiredPropertiesMissingError,

  /* 401 */
  InvalidCredentialsError,
  InvalidTokenError,

  /* 403 */
  AccountBlockedError,
  TokenExpiredError
};
