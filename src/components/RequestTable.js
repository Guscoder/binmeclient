import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TableRow from "./TableRow";
import Table from "react-bootstrap/table";
import "./tableRow.css";

const RequestTable = ({ request, binId }) => {
  return (
    <Container className='mt-5 p-3 bg-light text-white rounded border border-primary'>
      <Row className='bg-dark p-3'>
        <Col lg={5}>
          <h4 className='text-primary'>
            <strong>Request Bin Id:</strong> {binId}
          </h4>
        </Col>
        <Col className='text-primary'>
          <h4>
            <strong>Method: </strong>
            {request.method}
          </h4>
        </Col>
        <Col className='text-primary'>
          <h4>
            <strong>Received:</strong> {request.received_at}
          </h4>
        </Col>
      </Row>
      <Row>
        <div className='col-lg-6'>
          <Table striped bordered hover style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th className='subject'>Subject</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(request.payload).map((item, index) => {
                return (
                  <TableRow
                    key={index}
                    subject={item}
                    value={JSON.stringify(request.payload[item])}
                  />
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className='col-lg-6'>
          <Table striped bordered hover style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th className='subject'>Subject</th>
                <th className='data'>Data</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(request.headers).map((header, index) => {
                return (
                  <TableRow
                    key={index}
                    subject={header}
                    value={request.headers[header]}
                  />
                );
              })}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default RequestTable;
