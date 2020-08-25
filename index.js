"use strict";

const InvalidArgumentsError = require("./lib/developer/InvalidArgumentsError");
const FileNotExistError = require("./lib/developer/FileNotExistError");
const DirectoryNotExistError = require("./lib/developer/DirectoryNotExistError");
const StaticClassInstantiationError = require("./lib/developer/StaticClassInstantiationError");
const DocumentNotFoundError = require("./lib/db/DocumentNotFoundError");
const MoreThan1DocumentFoundError = require("./lib/db/MoreThan1DocumentFoundError");
const HTTPError = require("./lib/core/HTTPError");
const BadRequestError = require("./lib/http/client/BadRequestError");
const HeadersMissingError = require("./lib/http/client/bad-requests/HeadersMissingError");
const PathParametersMissingError = require("./lib/http/client/bad-requests/PathParametersMissingError");
const PathParameterMissingError = require("./lib/http/client/bad-requests/PathParameterMissingError");
const QueryStringMissingError = require("./lib/http/client/bad-requests/QueryStringMissingError");
const QueryStringParameterMissingError = require("./lib/http/client/bad-requests/QueryStringParameterMissingError");
const BodyMissingError = require("./lib/http/client/bad-requests/BodyMissingError");
const InternalServerError = require("./lib/http/server/InternalServerError");

module.exports = {
  InvalidArgumentsError,
  FileNotExistError,
  DirectoryNotExistError,

  StaticClassInstantiationError,

  DocumentNotFoundError,
  MoreThan1DocumentFoundError,

  HTTPError,

  BadRequestError,

  HeadersMissingError,
  PathParametersMissingError,
  PathParameterMissingError,
  QueryStringMissingError,
  QueryStringParameterMissingError,
  BodyMissingError,
  InternalServerError
};
