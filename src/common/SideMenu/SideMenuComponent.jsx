import React from 'react';
import { Nav, Container } from 'react-bootstrap';

const SideMenuComponent = () => (
  <Container fluid>
    <Nav defaultActiveKey="/vehicleList" className="flex-column">
      <Nav.Link eventKey="vehicle-list" href="/vehicleList">Vehicle List</Nav.Link>
      <Nav.Link eventKey="vehicle-map" disabled>Vehicle Map</Nav.Link> 
      <Nav.Link eventKey="vehicle-search" disabled>Vehicle Search</Nav.Link>
    </Nav>
  </Container>
);

export default SideMenuComponent;
