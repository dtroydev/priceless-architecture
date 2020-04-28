import React from "react";
import PropTypes from "prop-types";
import TableHeaderPlaceholders from "components/Table/Header/Placeholders";
import TableHeaderRow from "components/Table/Header/Row";

TableHeader.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array,
};

export default function TableHeader(props) {
  const { loading, data } = props;

  if (loading) return <TableHeaderPlaceholders columns={4} />;
  if (data) return <TableHeaderRow data={data[0]} />;
  return null;
}
