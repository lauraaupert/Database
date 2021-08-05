import React, { useEffect, useState, useContext } from 'react';
import Table from 'react-bootstrap/Table'
import api from  '../../utils/api'
import { Form, Col, Row, Button, Accordion, Card } from 'react-bootstrap';
import ClientForm from '../ClientForm.js';
import { CurrCustContext } from '../../utils/currentCustomerContext';
import UpdateModal from '../UpdateModal';
import InfoCanvas from '../CustCanvas';


function CustomerTable() {
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    const [ ID, setID ] = useState("")
        const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
    console.log(ID)

    const context = useContext(CurrCustContext)


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
        context.setCurrCust(result)
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

useEffect(() => {
      let customer_id =[];
    customer_id = allData.filter((data) => {
  return data._id.search(ID) !== -1;
});      
context.setCurrCust(customer_id)
 }, [ID])

//  console.log(this._id);

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
            <tr 
            
            key={data._id}  
            // onLoad={setID(data._id)} 
            value={data._id}
            onClick={(e) => setID(data._id)}
            style={{cursor:"pointer"}}
            // onClick={handleRowClick}
            >
          {/* {(e) => alert(data._id)} >  */}
            <td>{data.customerID}</td>
            <td>{data.lastName}, {data.firstName}</td>
            <td>{data.cellPhone}</td>
            <td>{data.homePhone}</td>
            <td>{data.email}</td>
            <td>{data.address.line1}, {data.address.line2}, {data.address.city}, {data.address.state}, {data.address.zip}</td>
           <td><InfoCanvas />
</td>
<td><UpdateModal  /></td>
            {/* <td>{data.jobs[0].jobID}</td> */}
            {/* <td> 
               
            <Button onClick={onDelete} style={{marginLeft: "10px"}} size="sm" variant="danger">Delete</Button>
            </td> */}
            {/* {context.currCust.length == 1 ?
  <td >               <UpdateModal/>
            <Button onClick={onDelete} style={{marginLeft: "10px"}} size="sm" variant="danger">Delete</Button>
</td> : <td></td>
} */}

          </tr>
          // </tr>
    //       {/* </Accordion.Header>
    //       </Accordion.Item>
    //       </Accordion> */}
    // //   : <tr></tr>
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