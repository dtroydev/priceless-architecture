import React from "react";
import PropTypes from "prop-types";
import Placeholder from "components/Placeholder";
import times from "lodash/times";

TableHeaderPlaceholders.propTypes = {
  columns: PropTypes.number.isRequired,
};

export default function TableHeaderPlaceholders(props) {
  const { columns } = props;
  return (
    <thead>
      <tr>
        {times(columns, (index) => (
          <th key={index}>
            <Placeholder width={"4rem"} height={"1rem"} className="mx-auto" />
          </th>
        ))}
      </tr>
    </thead>
  );
}
