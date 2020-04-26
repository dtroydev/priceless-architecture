import React from "react";
import TableHeaderPlaceholders from "components/Table/Header/Placeholders";
import TableHeaderRow from "components/Table/Header/Row";

export default function TableHeader(props) {
  const { loading, data } = props;

  if (loading) return <TableHeaderPlaceholders columns={4} />;
  if (data) return <TableHeaderRow data={data[0]} />;
  return null;
}
