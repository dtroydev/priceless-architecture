import React from "react";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import { RectShape } from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";

Placeholder.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default function Placeholder(props) {
  const { width, height, className } = props;

  return (
    <ReactPlaceholder
      showLoadingAnimation={true}
      className={className}
      customPlaceholder={
        <RectShape
          color="#E0E0E0"
          style={{ width: `${width}`, height: `${height}` }}
        />
      }
    />
  );
}
