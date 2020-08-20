"use strict";

const InvalidArgumentsError = require("./lib/core/InvalidArgumentsError");
const FileNotExistError = require("./lib/core/FileNotExistError");
const DirectoryNotExistError = require("./lib/core/DirectoryNotExistError");
const StaticClassInstantiationError = require("./lib/class/StaticClassInstantiationError");
const DocumentNotFoundError = require("./lib/db/DocumentNotFoundError");
const MoreThan1DocumentFoundError = require("./lib/db/MoreThan1DocumentFoundError");
const HTTPError = require("./lib/http/HTTPError");
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
  HeadersMissingError,
  PathParametersMissingError,
  PathParameterMissingError,
  QueryStringMissingError,
  QueryStringParameterMissingError,
  BodyMissingError,
  InternalServerError
};
