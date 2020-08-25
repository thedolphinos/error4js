"use strict";

const DeveloperError = require("./lib/core/DeveloperError");
const InvalidArgumentsError = require("./lib/developer/InvalidArgumentsError");
const StaticClassInstantiationError = require("./lib/developer/StaticClassInstantiationError");
const FileNotExistError = require("./lib/developer/FileNotExistError");
const DirectoryNotExistError = require("./lib/developer/DirectoryNotExistError");

const DbError = require("./lib/core/DbError");
const DocumentNotFoundError = require("./lib/db/DocumentNotFoundError");
const MoreThan1DocumentFoundError = require("./lib/db/MoreThan1DocumentFoundError");

const HTTPError = require("./lib/core/HTTPError");

const ServerError = require("./lib/http/ServerError");
const InternalServerError = require("./lib/http/server/InternalServerError");

const ClientError = require("./lib/http/ClientError");
const BadRequestError = require("./lib/http/client/BadRequestError");
const HeadersMissingError = require("./lib/http/client/bad-requests/HeadersMissingError");
const PathParametersMissingError = require("./lib/http/client/bad-requests/PathParametersMissingError");
const PathParameterMissingError = require("./lib/http/client/bad-requests/PathParameterMissingError");
const QueryStringMissingError = require("./lib/http/client/bad-requests/QueryStringMissingError");
const QueryStringParameterMissingError = require("./lib/http/client/bad-requests/QueryStringParameterMissingError");
const BodyMissingError = require("./lib/http/client/bad-requests/BodyMissingError");

module.exports = {
  DeveloperError,
  InvalidArgumentsError,
  StaticClassInstantiationError,
  FileNotExistError,
  DirectoryNotExistError,

  DbError,
  DocumentNotFoundError,
  MoreThan1DocumentFoundError,

  HTTPError,

  ServerError,
  InternalServerError,

  ClientError,
  BadRequestError,
  HeadersMissingError,
  PathParametersMissingError,
  PathParameterMissingError,
  QueryStringMissingError,
  QueryStringParameterMissingError,
  BodyMissingError
};
