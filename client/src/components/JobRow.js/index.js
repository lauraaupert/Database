import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button, Accordion, Card, Table } from 'react-bootstrap';
import api from '../../utils/api'


function JobRow() {
    const [ products, setProducts ] = useState([])
    const [ quantity, setQuantity ] = useState("")
    const [ date, setDate ] = useState("")
    // const [ jobType, setJobType ] = useState({}) //product group
    const [ index, setIndex ] = useState('')
    const [ price, setPrice ] = useState(Number)
    const [ code, setCode ] = useState("")
    const [ product, setProduct ] = useState({})

    let total = quantity*price
    let tax = (total*1.06625).toFixed(2)


    let jobID = (Math.random()*1000).toFixed(0)
    
    let customerID = 7832

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = "0"+dd
    }
    if (mm < 10) {
        mm = "0"+mm
    }
    today = yyyy+"-"+mm+"-"+dd;

    function handleSubmit(e) {
        e.preventDefault()
        api.saveJob(jobID, customerID, date, product, quantity, tax)
    }

    useEffect(() => {
        api.getProducts()
        .then(res => {
          console.log(res.data)
          setProducts(res.data);
        })
        .catch(error => {
          console.log('Error getting fake data: ' + error);
          })
      
      }, []);  

      function handleChange(e) {
        setProduct(products[parseFloat(e.target.value)])
      }

      useEffect(() => {
        setPrice(product.price)
        setCode(product.code)
      }, [product])
    

    return(
        <div>
        {/* <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Add Job
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
            <Card.Body>
                <Form>
                    <Form.Row>
                    <Table striped bordered hover>
                        <Form.Group controlId="exampleForm.SelectCustom">
                        <thead>
                        <tr>
                        <th>Choose Service</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                        <th>Total with Tax</th>
                        <th>Date</th>

                        </tr>
                    </thead> */}
                    <tbody >
   <tr >

    <Form.Control as="select" custom                
    onChange={handleChange} style={{width:"250px"}}
>    
{/* <Form.Label>Choose Service</Form.Label> */}

<option  key="default">Choose a Product</option>
{products.map((item, index)=>{
              return ( 
        <option  key={index} value={index} 
        >{item.name}</option>

        )})}

</Form.Control>
<td style={{width:"100px"}}><input style={{width:"50px"}} defaultValue={1} onChange={(e) => setQuantity(parseInt(e.target.value))} value={quantity}/></td>
<td style={{width:"100px"}}>${price}</td>
<td style={{width:"100px"}}>${total.toFixed(2)}</td>
<td style={{width:"100px"}}>${tax}</td>
<td style={{width:"200px"}}><input type="date" min={today}onChange={(e) => setDate(e.target.value)}></input>
</td>
<td><Button variant="success" type="submit" onClick={handleSubmit}>Confirm Job</Button>
</td>
<td><Button variant="warning" type="submit" >Estimate Job</Button>
</td>
 </tr>
   </tbody>

  {/* </Form.Group>
</Table>
</Form.Row>
</Form>
</Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion> */}
</div>


    )
}

export default JobRow;