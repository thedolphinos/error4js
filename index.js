"use strict";

const InvalidArgumentsError = require("./lib/core/InvalidArgumentsError");
const FileNotExistError = require("./lib/core/FileNotExistError");
const DirectoryNotExistError = require("./lib/core/DirectoryNotExistError");

module.exports = {
  InvalidArgumentsError,
  FileNotExistError,
  DirectoryNotExistError
};
