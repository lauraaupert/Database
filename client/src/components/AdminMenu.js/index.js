import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function AdminMenu() {

    return(
        <Container>
            <Row>
<Col>
  <Button variant="primary" size="lg" block style={{backgroundColor: "lightgray", height: "400px"}} href="/newcustomer">
    New Customer
  </Button>
  <Button variant="secondary" size="lg" block>
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
<Row>
<Button variant="warning" size="lg" href="/admin/addproduct">
    Add Products
  </Button>
  <Button variant="success" size="lg" block>
    Order Details
  </Button>

</Row>
</Container>
    )
}

export default AdminMenu;