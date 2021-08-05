import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Example from "../CustCanvas";

function Menu() {

    return(
        <Container>
            <Row>
<Col>
  <Button variant="primary" size="lg" block style={{backgroundColor: "lightgray", height: "400px"}} href="/newcustomer">
    New Customer
  </Button>
  <Button variant="secondary" size="lg" block href="/customers">
    All Customers
  </Button>
</Col>
<Col>
  <Button variant="primary" size="lg" block href="/newjob">
    New Order
  </Button>
  <Button variant="secondary" size="lg" block>
    All Orders
  </Button>
</Col>
</Row>
</Container>
    )
}

export default Menu;