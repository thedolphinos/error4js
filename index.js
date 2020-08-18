"use strict";

const InvalidArgumentsError = require("./lib/core/InvalidArgumentsError");
const FileNotExistError = require("./lib/core/FileNotExistError");
const DirectoryNotExistError = require("./lib/core/DirectoryNotExistError");
const StaticClassInstantiationError = require("./lib/class/StaticClassInstantiationError");
const DocumentNotFoundError = require("./lib/db/DocumentNotFoundError");
const MoreThan1DocumentFoundError = require("./lib/db/MoreThan1DocumentFoundError");
const HTTPError = require("./lib/http/HTTPError");
const BodyMissingError = require("./lib/http/client/BodyMissingError");
const InternalServerError = require("./lib/http/server/InternalServerError");

module.exports = {
  InvalidArgumentsError,
  FileNotExistError,
  DirectoryNotExistError,
  StaticClassInstantiationError,
  DocumentNotFoundError,
  MoreThan1DocumentFoundError,
  HTTPError,
  BodyMissingError,
  InternalServerError
};
