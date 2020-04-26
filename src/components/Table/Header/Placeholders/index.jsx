import React from "react";
import Placeholder from "components/Placeholder";
import times from "lodash/times";

export default function TableHeaderPlaceholders(props) {
  const { columns } = props;
  return (
    <thead>
      <tr>
        {times(columns, index => (
          <th key={index}>
            <Placeholder width={"4rem"} height={"1rem"} className="mx-auto" />
          </th>
        ))}
      </tr>
    </thead>
  );
}
