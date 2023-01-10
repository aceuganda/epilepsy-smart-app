import React from "react";
import PropTypes from "prop-types";

const Spinner = () => (
  <div className="SpinnerWrapper"
  >
    <div className="Spinner" />
  </div>
);

Spinner.propTypes = {
  size: PropTypes.string,
};

Spinner.defaultProps = {
  size: "",
};

export default Spinner;
