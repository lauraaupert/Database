import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import api from  '../../utils/api'
import { Form, Col, Row, Button } from 'react-bootstrap';

function ProductTable() {
    const [allData,setAllData] = useState([]);
    const [ upholstery, setUpholstery ] = useState([]);
    const [ carpet, setCarpet ] = useState([]);


    useEffect(() => {
        console.log()
        api.getProducts()
        .then(res => {
          console.log(res.data)
          setAllData(res.data);
          console.log(allData)
        })
        .catch(error => {
          console.log('Error getting fake data: ' + error);
          })
      
      }, []);
      console.log(allData)
      for (let i=0; i < allData.length; i++) {
          if (allData[i].group === "Upholstery") {
            upholstery.push(allData[i])
          } else if (allData[i].group === "Carpet") {
            carpet.push(allData[i])
          }
      }
      function onDelete(e) {
        api.deleteProduct()
    }


    return ( 
<Row>
    <Col>
    <h3>Carpet</h3>

<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Product Code</th>
      <th>Product Name</th>
      <th>Selling Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      {carpet.map((data)=> {
                    return (

                // (data.group === "Upholstery") ?

            <tr key={data.code}>
            <td>{data.code}</td>
            <td>{data.name}</td>
            <td>${data.price}</td>
            <td><Button size="sm" variant="info">Update</Button>
            <Button onClick={onDelete} style={{marginLeft: "10px"}} size="sm" variant="danger">Delete</Button></td>
          </tr>
    //   : <tr></tr>
          ) 
      })}

  </tbody>
</Table>  
</Col> 
<Col>
<h3>Upholstery</h3>

<Table striped bordered hover size="sm">

  <thead>
    <tr>
      <th>Product Code</th>
      <th>Product Name</th>
      <th>Selling Price</th>
      <th>Actions</th>

    </tr>
  </thead>
  <tbody>
      {upholstery.map((data)=> {
          return (
            // (data.group === "Carpet") ?

            <tr key={data.code}>
            <td>{data.code}</td>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td><Button size="sm" variant="info">Update</Button>
            <Button style={{marginLeft: "10px"}} size="sm" variant="danger">Delete</Button></td>

          </tr>
            // : <tr></tr>

          )
      })}

  </tbody>
</Table>  
</Col> 
</Row>     
    )
}

export default ProductTable;