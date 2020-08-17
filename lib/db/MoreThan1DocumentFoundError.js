"use strict";

class MoreThan1DocumentFoundError extends Error
{
  constructor ()
  {
    super();

    this.message = "More than 1 document was found with the specified query. However, for this operation it must be 1.";
  }
}

module.exports = MoreThan1DocumentFoundError;
