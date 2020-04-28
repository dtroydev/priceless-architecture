import React from "react";
import PropTypes from "prop-types";
import Placeholder from "components/Placeholder";
import times from "lodash/times";

TableBodyPlaceholders.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  rowWidths: PropTypes.array.isRequired,
  height: PropTypes.string.isRequired,
};
export default function TableBodyPlaceholders(props) {
  const { rows, columns, rowWidths, height } = props;

  return (
    <tbody>
      {times(rows, (rowIndex) => (
        <tr key={rowIndex}>
          {times(columns, (columnIndex) => (
            <td key={columnIndex}>
              <Placeholder width={rowWidths[rowIndex]} height={height} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
