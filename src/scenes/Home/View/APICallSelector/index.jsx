import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { API_ENDPOINTS } from "services/api/config";
import classNames from "classnames";
import "scenes/Home/View/APICallSelector/style.scss";

APIEndpointOptions.propTypes = {
  API: PropTypes.object.isRequired,
};

function APIEndpointOptions(props) {
  const { API } = props;

  return (
    <>
      {Object.keys(API).map((key, index) => (
        <option key={index}>{key}</option>
      ))}
    </>
  );
}

const APICallSelectorMemo = React.memo(function APICallSelector(props) {
  const { loading, handleInput } = props;

  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>API Call Selector</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleInput}>
            <Form.Group>
              <Form.Label>Choose Type</Form.Label>
              <Form.Control name="endpoint" as="select">
                <APIEndpointOptions API={API_ENDPOINTS} />
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Choose Id</Form.Label>
              <Form.Control
                name="id"
                type="text"
                placeholder="Leave Blank for All Entries"
              />
            </Form.Group>
            <Row className="justify-content-center">
              <Col xs="auto" sm="auto">
                <Button
                  className={classNames({ "input-button-pulse": loading })}
                  variant="primary"
                  type="submit"
                  disabled={loading}
                >
                  Request
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
});

APICallSelectorMemo.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default APICallSelectorMemo;
