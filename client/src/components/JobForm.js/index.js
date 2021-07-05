import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button, Accordion, Card, Table } from 'react-bootstrap';
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import api from '../../utils/api'
import JobRow from '../JobRow.js'


function JobForm() {
    // const [ products, setProducts ] = useState([])
    // const [ quantity, setQuantity ] = useState("")
    // const [ date, setDate ] = useState("")
    // // const [ jobType, setJobType ] = useState({}) //product group
    // const [ index, setIndex ] = useState('')
    // const [ price, setPrice ] = useState(Number)
    // const [ code, setCode ] = useState("")
    // const [ product, setProduct ] = useState({})

    // let total = quantity*price
    // let tax = (total*1.06625).toFixed(2)


    // let jobID = (Math.random()*1000).toFixed(0)
    
    // let customerID = 7832

    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth()+1;
    // var yyyy = today.getFullYear();
    // if (dd < 10) {
    //     dd = "0"+dd
    // }
    // if (mm < 10) {
    //     mm = "0"+mm
    // }
    // today = yyyy+"-"+mm+"-"+dd;

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     api.saveJob(jobID, customerID, date, product, quantity, tax)
    // }

    // useEffect(() => {
    //     api.getProducts()
    //     .then(res => {
    //       console.log(res.data)
    //       setProducts(res.data);
    //     })
    //     .catch(error => {
    //       console.log('Error getting fake data: ' + error);
    //       })
      
    //   }, []);  

    //   function handleChange(e) {
    //     setProduct(products[parseFloat(e.target.value)])
    //   }

    //   useEffect(() => {
    //     setPrice(product.price)
    //     setCode(product.code)
    //   }, [product])
// function handleClick(e) {
//     e.preventDefault();
//     return (new JobRow)
// }
    
  
    return (
        <div>
                    <Accordion>
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
                        <th style={{width:"250px"}}>Choose Service</th>
                        <th style={{width:"100px"}}>Quantity</th>
                        <th style={{width:"100px"}}>Unit Price</th>
                        <th style={{width:"100px"}}>Total</th>
                        <th style={{width:"100px"}}>Total with Tax</th>
                        <th style={{width:"200px"}}>Date</th>

                        </tr>
                    </thead>

                    <JobRow />        
        <JobRow />
        <JobRow />


                    </Form.Group>
</Table>
</Form.Row>
</Form>
</Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>


        <Button block variant="link" type="button" onClick={(e) => {return <JobRow />}}>Add Product</Button>
        </div>
//         // <div>
//             {/* <Accordion>
//                 <Card>
//                     <Card.Header>
//                         <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                         Add Job
//                         </Accordion.Toggle>
//                     </Card.Header>
//                     <Accordion.Collapse eventKey="0">
//                 <Card.Body>
//                     <Form>
//                         <Form.Row>
//                         <Table striped bordered hover>
//                             <Form.Group controlId="exampleForm.SelectCustom">
//                             <thead>
//                             <tr>
//                             <th>Choose Service</th>
//                             <th>Quantity</th>
//                             <th>Unit Price</th>
//                             <th>Total</th>
//                             <th>Total with Tax</th>
//                             <th>Date</th>

//                             </tr>
//                         </thead> */}
// {/* <tbody style={{width: "100%"}}>
//    <tr style={{width: "100%"}}>

//     <Form.Control as="select" custom                
//     onChange={handleChange} 
//                      */}
// {/* >    <Form.Label>Choose Service</Form.Label>

//         <option key="default">Choose a Product</option>
//         {products.map((item, index)=>{
//                       return ( 
//                 <option key={index} value={index} 
//                 >{item.name}</option>

//                 )})}

//     </Form.Control>
//     <td><input defaultValue={1} onChange={(e) => setQuantity(parseInt(e.target.value))} value={quantity}/></td>
//     <td>${price}</td>
//     <td>${total.toFixed(2)}</td>
//     <td>${tax}</td>
//     <td><input type="date" min={today}onChange={(e) => setDate(e.target.value)}></input>
// </td>
//     <td><Button variant="success" type="submit" onClick={handleSubmit}>Confirm Job</Button>
// </td>
// <td><Button variant="warning" type="submit" >Estimate Job</Button>
// </td> */}

//     {/* </tr>
//     <tr size="lg">
//         <Button block variant="link" type="submit" >Add Product</Button>
//     </tr>
//     </tbody>

//   </Form.Group>
// </Table> */}
//   {/* </Col> */}
//   {/* <Col sm={2}>

// <Form.Group controlId="exampleForm.SelectCustom">
//   <Form.Label>Quantity</Form.Label>
//   <Form.Control defaultValue={1} onChange={(e) => setQuantity(parseInt(e.target.value))} value={quantity} />
// </Form.Group>
// </Col>
// <Col>
// <p>Unit Price</p>
// <p>${price}</p>
// </Col>
// <Col>
// <p>Total</p>

//      <p>${total.toFixed(2)}</p> 
//      {/* <p></p>} */}
// {/* </Col>
// <Col>
// <p>With Tax</p>
// <p>${tax}</p>
// </Col>
// <Col>
// <p>Date</p>
// <input type="date" min={today}onChange={(e) => setDate(e.target.value)}></input>
// </Col> */}
// {/* <Col>
// <Button variant="success" type="submit" onClick={handleSubmit}>Confirm</Button>
// </Col>  */}




//   {/* </Form.Row>
// </Form>
//           </Card.Body>
//     </Accordion.Collapse>
//   </Card>
//   <Card>
//     <Card.Header>
//       <Accordion.Toggle as={Button} variant="link" eventKey="1">
//         Click me!
//       </Accordion.Toggle>
//     </Card.Header>
//     <Accordion.Collapse eventKey="1">
//       <Card.Body>Hello! I'm another body</Card.Body>
//     </Accordion.Collapse>
//   </Card>
// </Accordion>
// </div> */}

    )
}

export default JobForm;