import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "scenes/Home/View/Input";
import Output from "scenes/Home/View/Output";

HomeView.propTypes = {
  handleInput: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array,
};

export default function HomeView(props) {
  const { handleInput, loading, data } = props;
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs="auto" sm="auto">
          <h1>Home Page</h1>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col xs="auto" sm="auto">
          <Input handleInput={handleInput} loading={loading} />
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col xs="auto" sm="auto">
          <Output data={data} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
}
