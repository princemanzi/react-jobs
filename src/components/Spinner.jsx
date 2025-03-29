import React from "react";

const Spinner = ({ loading }) => {
  return (
    loading && (
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
    )
  );
};

export default Spinner;
