import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import api from '../../utils/api'


function AddProductForm() {
    const [ group, setGroup ] = useState('')
    const [ name, setName ] = useState('')
    const [ code, setCode ] = useState('')
    const [ price, setPrice ] = useState('')

    function onSubmit() {
        api.saveProduct(group, name, code, price)
    }

    return ( 
        
        <Form>
<Form.Group>
  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Product Group
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Product Group"
      onChange={(e) => setGroup(e.target.value)} value={group}
       />
    </Col>
  </Form.Row>

  <hr />

  <Form.Row>
    <Form.Label column="lg" lg={2}>
       Product Name
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Product Name" 
      onChange={(e) => setName(e.target.value)} value={name}
       />
    </Col>
  </Form.Row>
  
  <hr />

  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Product Code
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Product Coder" 
      onChange={(e) => setCode(e.target.value)} value={code}
      />
    </Col>
  </Form.Row>

  <hr />

  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Selling Price
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Selling Price"
      onChange={(e) => setPrice(e.target.value)} value={price}
       />
    </Col>
  </Form.Row>

  <hr />
</Form.Group>
<Button type="submit" onClick={onSubmit}>Add Product</Button>
</Form>
    )
}

export default AddProductForm; 