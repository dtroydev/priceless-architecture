import React from "react";

export default function TableHeaderRow(props) {
  const { data } = props;

  return (
    <thead>
      <tr>
        {Object.keys(data).map(key => (
          <th key={key} className="text-center">
            {key}
          </th>
        ))}
      </tr>
    </thead>
  );
}
