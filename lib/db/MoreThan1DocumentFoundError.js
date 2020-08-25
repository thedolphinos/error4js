"use strict";

const DbError = require("../core/DbError");

/**
 * Must be thrown when as a result of a query there must be only 1 document, but there is more than 1.
 *
 * @since 0.5.0
 */
class MoreThan1DocumentFoundError extends DbError
{
  /**
   * Creates an instance.
   *
   * @since 0.5.0
   */
  constructor ()
  {
    super("More than 1 document was found with the specified query. However, for this operation it must be 1.");
  }
}

module.exports = MoreThan1DocumentFoundError;
