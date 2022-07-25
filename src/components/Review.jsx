import React, { useState, useEffect } from "react";

import {Link, useParams, useLocation} from "react-router-dom";

const Review = () => {
  return (
    <div>{useParams().review_id}</div>
  )
}

export default Review