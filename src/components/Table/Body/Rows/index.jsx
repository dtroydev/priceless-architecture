import React from "react";

export default function TableBodyRows(props) {
  const { data } = props;

  return (
    <tbody>
      {data.map((object, index) => (
        <tr key={index}>
          {Object.keys(object).map((key, index) => (
            <td key={index}>{object[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
