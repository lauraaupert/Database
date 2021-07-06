import React from 'react';
import Nav from 'react-bootstrap/Nav'

function Navigation() {
    return ( 
<Nav className="justify-content-center"  fill={true} style={{backgroundColor: "light-blue"}} variant="pills">
<Nav.Item>
  <Nav.Link 
//   onClick={(e) => {e.preventDefault()}} 
href="/home">Menu
    </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-1" href="/customers">Customers</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-2" href="/jobs">Jobs</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav.Item>
</Nav>  
)
}

export default Navigation;