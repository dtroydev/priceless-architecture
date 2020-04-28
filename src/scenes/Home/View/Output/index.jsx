import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "components/Table";

Output.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

export default function Output(props) {
  const { data, loading } = props;

  return (
    <Container fluid>
      <Row className="mb-2 justify-content-center">
        <Col xs="auto" sm="auto">
          <h2>Results</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table data={data} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
}
