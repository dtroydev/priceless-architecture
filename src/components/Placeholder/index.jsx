import React from "react";
import ReactPlaceholder from "react-placeholder";
import { RectShape } from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";

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
