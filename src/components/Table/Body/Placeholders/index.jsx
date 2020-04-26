import React from "react";
import Placeholder from "components/Placeholder";
import times from "lodash/times";

export default function TableBodyPlaceholders(props) {
  const { rows, columns, rowWidths, height } = props;

  return (
    <tbody>
      {times(rows, rowIndex => (
        <tr key={rowIndex}>
          {times(columns, columnIndex => (
            <td key={columnIndex}>
              <Placeholder width={rowWidths[rowIndex]} height={height} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
