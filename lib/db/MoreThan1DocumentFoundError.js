"use strict";

class MoreThan1DocumentFoundError extends Error
{
  message = "More than 1 document was found with the specified query. However, for this operation it must be 1.";

  constructor ()
  {
    super();
  }
}

module.exports = MoreThan1DocumentFoundError;
