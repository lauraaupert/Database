import React, { useState, useContext, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import Button from 'react-bootstrap/Button'
import JobForm from '../JobForm.js';
import UpdateModal from '../UpdateModal/index.js';
import { CurrCustContext } from '../../utils/currentCustomerContext';


const options = [
    // {
    //   name: 'Enable body scrolling',
    //   scroll: true,
    //   backdrop: false,
    // },
    // {
    //   name: 'Enable backdrop (default)',
    //   scroll: false,
    //   backdrop: true,
    // },
    {
      name: 'More',
      scroll: true,
      backdrop: true,
    },
  ];
  
  function OffCanvasInfo({ name, ...props }) {
    const [show, setShow] = useState(false);
    const [ customer, setCustomer ] = useState( {} )
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const context = useContext(CurrCustContext)
    console.log(context)

        useEffect(() => {
        setCustomer(context.currCust[0])
    }, [context])
    console.log(customer)

    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2">
          {name}
        </Button>
        {customer === undefined ? 
<p></p> :
        <Offcanvas show={show} onHide={handleClose} {...props}>

          <Offcanvas.Header closeButton>
             
            <Offcanvas.Title>Customer {customer.customerID}</Offcanvas.Title>
             
        
          </Offcanvas.Header>
          <Offcanvas.Body>
              
              {/* {customer.jobs.map((item) => 
              return( 

              ))} */}
<UpdateModal />
<JobForm />
          </Offcanvas.Body>
        </Offcanvas>
        }
      </>
    );
  }
  
  function InfoCanvas() {
    return (
      <>
        {options.map((props, idx) => (
          <OffCanvasInfo key={idx} placement="bottom" style={{height:"600px"}} {...props} />
        ))}
      </>
    );
  }
  

  export default InfoCanvas;