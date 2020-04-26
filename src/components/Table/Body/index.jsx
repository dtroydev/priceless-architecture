import React from "react";
import TableBodyPlaceholders from "components/Table/Body/Placeholders";
import TableBodyRows from "components/Table/Body/Rows";

export default function TableBody(props) {
  const { loading, data } = props;

  if (loading)
    return (
      <TableBodyPlaceholders
        columns={4}
        rows={3}
        rowWidths={["6rem", "5.5rem", "6rem"]}
        height="1rem"
      />
    );

  if (data) return <TableBodyRows data={data} />;

  return null;
}
