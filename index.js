"use strict";

const InvalidArgumentsError = require("./lib/core/InvalidArgumentsError");
const FileNotExistError = require("./lib/core/FileNotExistError");
const DirectoryNotExistError = require("./lib/core/DirectoryNotExistError");
const StaticClassInstantiationError = require("./lib/class/StaticClassInstantiationError");
const DocumentNotFound = require("./lib/db/DocumentNotFound");

module.exports = {
  InvalidArgumentsError,
  FileNotExistError,
  DirectoryNotExistError,
  StaticClassInstantiationError,
  DocumentNotFound
};
