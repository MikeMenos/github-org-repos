import React from "react";

const Spinner = ({ image, loading }) => {
  return <div>{loading ? image : ""}</div>;
};

export default Spinner;
