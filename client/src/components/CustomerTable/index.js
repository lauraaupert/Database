import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import api from  '../../utils/api'
import { Form, Col, Row, Button } from 'react-bootstrap';
import ClientForm from '../ClientForm.js';

function CustomerTable() {
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);

    const handleSearch = (event) =>{
        let value = event.target.value;
        let result = [];
        console.log(value)
        result = allData.filter((data) => {
          return data.firstName.search(value) !== -1;
        });
        console.log(result)
        if (result.length < 1) {
          let lastNameResult =[];
        lastNameResult = allData.filter((data) => {
          return data.lastName.search(value) !== -1;
        });
        result = lastNameResult;
    }
        if (result.length < 1) {
            let cityResult =[];
          cityResult = allData.filter((data) => {
            return data.address.city.search(value) !== -1;
          });
          result = cityResult;
  
    }
    if (result.length < 1) {
      let zipResult =[];
    zipResult = allData.filter((data) => {
      return data.address.zip.toString().search(parseFloat(value)) !== -1;
    });
    result = zipResult;

}
if (result.length < 1) {
  let idResult =[];
idResult = allData.filter((data) => {
  return data.customerID.toString().search(parseFloat(value)) !== -1;
});
result = idResult;

}

if (result.length < 1) {
  let emailResult =[];
emailResult = allData.filter((data) => {
  return data.email.search(value) !== -1;
});
result = emailResult;

}
        console.log(result)
        // }
        setFilteredData(result);
      }
    
    useEffect(() => {
        console.log()
        api.getCustomers()
        .then(res => {
          console.log(res.data)
          setAllData(res.data);
          setFilteredData(res.data);

          console.log(allData)
        })
        .catch(error => {
          console.log('Error getting fake data: ' + error);
          })
      
      }, []);
      console.log(allData)
      console.log(filteredData)

  function handleClick(e) {
    e.preventDefault();
}


      function onDelete(e) {
        api.deleteProduct()
    }


    return ( 
        <div>
        <Form>
<Row>
<Col lg={11}>
  <Form.Group controlId="formBasicEmail">
  
    
    <Form.Control type="name" placeholder="Search"
    onChange={(event) =>handleSearch(event)}
    // onChange={(e) => setSearch(e.target.value)} value={search} 
    />
    
    </Form.Group>
    </Col>
  <Col lg={1}>
  <Button variant="primary" type="submit" onClick={handleClick} block>
    Search
  </Button>
  </Col>
  </Row>
</Form>

{filteredData.length > 0 ? 

<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Customer ID</th>
      <th>Customer Name</th>
      <th>Cell Phone</th>
      <th>Home Phone</th>
      <th>Email</th>
      <th>Address</th>
      <th>Jobs</th>

    </tr>
  </thead>
  <tbody>
      {filteredData.map((data)=> {
                    return (

                // (data.group === "Upholstery") ?

            <tr key={data._id}>
            <td>{data.customerID}</td>
            <td>{data.lastName}, {data.firstName}</td>
            <td>{data.cellPhone}</td>
            <td>{data.homePhone}</td>
            <td>{data.email}</td>
            <td>{data.address.line1}, {data.address.line2}, {data.address.city}, {data.address.state}, {data.address.zip}</td>
            <td>{data.jobs}</td>

            <td><Button size="sm" variant="info">Update</Button>
            <Button onClick={onDelete} style={{marginLeft: "10px"}} size="sm" variant="danger">Delete</Button></td>
          </tr>
    //   : <tr></tr>
          ) 
      })}

  </tbody>
</Table>  
:
<div>
<p>Please register this new customer.</p>
<ClientForm />
</div>
}
</div>
    )
}

export default CustomerTable;