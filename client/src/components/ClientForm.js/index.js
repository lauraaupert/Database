import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button } from 'react-bootstrap';
import Products from '../../data/products.json'
import api from '../../utils/api'

function ClientForm() {
    const [firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ cellPhone, setCellPhone ] = useState('')
    const [ homePhone, setHomePhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ line1, setLine1 ] = useState('')
    const [ line2, setLine2 ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state, setState ] = useState('')
    const [ zip, setZip ] = useState('')
    // const [ customerID, setCustomerID ] = useState('')
    const customerID = 7832


    function onSubmit(e) {
        e.preventDefault();
        api.saveCustomer(customerID, firstName, lastName, cellPhone, homePhone, email, line1, line2, city, state, zip)
    }

const products = Products["Product Group"]
// setCustomerID(7324)
    return(
        <Form>
<Form.Group>
  <Form.Row>
    <Form.Label column="lg" lg={2}>
      First Name
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="First Name"
      onChange={(e) => setFirstName(e.target.value)} value={firstName}
       />
    </Col>
  </Form.Row>

  <hr />

  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Last Name
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Last Name" 
      onChange={(e) => setLastName(e.target.value)} value={lastName}
       />
    </Col>
  </Form.Row>
  
  <hr />

  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Cell Phone
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Cell Number" 
      onChange={(e) => setCellPhone(e.target.value)} value={cellPhone}
      />
    </Col>
  </Form.Row>

  <hr />

  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Home Phone
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Home Number"
      onChange={(e) => setHomePhone(e.target.value)} value={homePhone}
       />
    </Col>
  </Form.Row>

  <hr />

  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Email
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="email" placeholder="Email"
      onChange={(e) => setEmail(e.target.value)} value={email} />
    </Col>
  </Form.Row>

  <hr />

  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Address Line 1
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Address 1" 
      onChange={(e) => setLine1(e.target.value)} value={line1}
      />
    </Col>
  </Form.Row>

  <hr />

  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Address Line 2
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Address 2" 
      onChange={(e) => setLine2(e.target.value)} value={line2}
      />
    </Col>
  </Form.Row>

  <hr />

  <Form.Row>
    <Form.Label column="lg" lg={2}>
      City, State, Zip
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="City"
      onChange={(e) => setCity(e.target.value)} value={city} />
    </Col>
    <Col>
      <Form.Control size="lg" type="text" placeholder="State" 
      onChange={(e) => setState(e.target.value)} value={state}/>
    </Col>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Zip"
      onChange={(e) => setZip(e.target.value)} value={zip} />
    </Col>

  </Form.Row>

  <hr />

  <Form.Row>
      <Col>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Referral</Form.Label>
    <Form.Control as="select">
      <option>Google</option>
      <option>Friend</option>
      <option>A little bird</option>
      <option>Your mom</option>
      <option>Add New</option>
    </Form.Control>
  </Form.Group>
  </Col>
  <Col>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>County</Form.Label>
    <Form.Control as="select">
      <option>Bergen</option>
      <option>Middlesex</option>
      <option>New Jersey</option>
      <option>Somewhere Else</option>
      <option>Come Party</option>
    </Form.Control>
  </Form.Group>
  </Col>
  <Col>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Confirmed Booking"
  />
  </Col>
  <Col>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Products</Form.Label>
    <Form.Control as="select">
    {products.map(item => {
        return (

            <option>{item.Carpet.name}</option>
              )
    })}
                  </Form.Control>

  </Form.Group>
  </Col>

  </Form.Row>

  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Large Text
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Large text" />
    </Col>
  </Form.Row>

  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Large Text
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Large text" />
    </Col>
  </Form.Row>
</Form.Group>

<Button type="submit" variant="warning" block onClick={onSubmit}>Save Customer</Button>{' '}

</Form>

    )
}

export default ClientForm;

//for address
{/* <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />
              

              //</Form.Group>

for "booked" checkbox
              <Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Check this switch"
  /></Form.Row> */}