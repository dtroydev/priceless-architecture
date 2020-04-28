import React from "react";
import PropTypes from "prop-types";
import BootstrapTable from "react-bootstrap/Table";
import TableHeader from "components/Table/Header";
import TableBody from "components/Table/Body";
import { CSSTransition } from "react-transition-group";
import "components/Table/style.scss";

const TRANSITION_DELAY_MS = 1000;

Table.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array,
};

export default function Table(props) {
  const { loading, data } = props;
  return (
    <CSSTransition
      in={!loading}
      timeout={TRANSITION_DELAY_MS}
      classNames="output-table"
    >
      <BootstrapTable striped bordered hover variant="dark">
        <TableHeader data={data} loading={loading} />
        <TableBody data={data} loading={loading} />
      </BootstrapTable>
    </CSSTransition>
  );
}
