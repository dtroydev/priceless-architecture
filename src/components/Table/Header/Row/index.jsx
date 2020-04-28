import React from "react";
import PropTypes from "prop-types";

TableHeaderRow.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function TableHeaderRow(props) {
  const { data } = props;

  return (
    <thead>
      <tr>
        {Object.keys(data).map((key) => (
          <th key={key} className="text-center">
            {key}
          </th>
        ))}
      </tr>
    </thead>
  );
}
