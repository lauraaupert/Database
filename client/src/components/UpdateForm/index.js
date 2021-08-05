import React, { useContext, useState } from 'react';
import { Col, Row, Button, Form, Card } from 'react-bootstrap'
import api from '../../utils/api';
import { CurrCustContext } from '../../utils/currentCustomerContext';
import axios from 'axios'


function UpdateForm() {

    const context = useContext(CurrCustContext)
    // const customer = context.currCust[0].curr_id
    const customer = context.currCust[0]

    const id = customer._id

    const [ customerID, setCustomerID ] = useState(customer.customerID)
    const [ firstName, setFirstName ] = useState(customer.firstName)
    const [ lastName, setLastName ] = useState(customer.lastName)
    const [ cellPhone, setCellPhone ] = useState(customer.cellPhone)
    const [ homePhone, setHomePhone ] = useState(customer.homePhone)
    const [ email, setEmail ] = useState(customer.email)
    const [ line1, setLine1 ] = useState(customer.address.line1)
    const [ line2, setLine2 ] = useState(customer.address.line2)
    const [ city, setCity ] = useState(customer.address.city)
    const [ state, setState ] = useState(customer.address.state)
    const [ zip, setZip ] = useState(customer.address.zip)
    const [ county, setCounty ] = useState(customer.county)


    
    console.log(id, customerID, firstName, cellPhone, homePhone, email, city, lastName, county)

    function handleSubmit(e) {
        e.preventDefault();
        
        // axios.put("/api/customers", county)
        // .then(response => console.log(response.data));
        api.updateCustomer(
            id, 
            customerID, firstName, lastName, cellPhone, homePhone,
            email, 
            county, 
            line1, line2, city, state, zip
            )
        console.log(id, county)
    }
    return ( 
        <Card>
            <Card.Body >
<Form>
<Row className="mb-3">

<Form.Group as={Col} controlId="formGridID">
  <Form.Label>Customer ID</Form.Label>
  <Form.Control onChange={(e) => setCustomerID(e.target.value)}type="text" defaultValue={customer.customerID} placeholder="Enter ID" />
</Form.Group>

 <Form.Group as={Col} controlId="formGridFirst">
  <Form.Label>First Name</Form.Label>
  <Form.Control onChange={(e) => setFirstName(e.target.value)} type="text" defaultValue={customer.firstName} />
</Form.Group>

<Form.Group as={Col} controlId="formGridLast">
  <Form.Label>Last Name</Form.Label>
  <Form.Control onChange={(e) => setLastName(e.target.value)} type="text" defaultValue={customer.lastName}></Form.Control> 
</Form.Group>

</Row>

  <Row className="mb-3">

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control onChange={(e) => setEmail(e.target.value)}  type="email" defaultValue={customer.email} />
    </Form.Group>

     <Form.Group as={Col} controlId="formGridCounty">
      <Form.Label>County</Form.Label>
      <Form.Control onChange={(e) => setCounty(e.target.value)} type="text" defaultValue={customer.county} />
    </Form.Group>
  </Row>

  <Row>

  <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>Cell Phone</Form.Label>
      <Form.Control onChange={(e) => setCellPhone(e.target.value)} type="text" defaultValue={customer.cellPhone} />
    </Form.Group>
  <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>Home Phone</Form.Label>
      <Form.Control onChange={(e) => setHomePhone(e.target.value)} type="text" defaultValue={customer.homePhone} />
    </Form.Group>
  </Row>


  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control onChange={(e) => setLine1(e.target.value)} defaultValue={customer.address.line1} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control onChange={(e) => setLine2(e.target.value)} defaultValue={customer.address.line2} />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control onChange={(e) => setCity(e.target.value)} defaultValue={customer.address.city} />
    </Form.Group>
    

     <Form.Group as={Col} controlId="formGridState">
     <Form.Label>State</Form.Label>
      <Form.Control onChange={(e) => setState(e.target.value)} defaultValue={customer.address.state} />
      </Form.Group>

     <Form.Group as={Col} controlId="formGridZip">
       <Form.Label>Zip</Form.Label>
       <Form.Control onChange={(e) => setZip(e.target.value)} defaultValue={customer.address.zip} />
     </Form.Group>
   </Row>
    </Form>

<Button onClick={handleSubmit} type="submit" variant="info">Update Info</Button>

</Card.Body>
        </Card>

)
}

export default UpdateForm;