import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavDropdown } from 'react-bootstrap';
import {
  faLaptop, faProjectDiagram, faMap, faListAlt, faPlusSquare, faChevronRight, faCogs,
  faQrcode
} from '@fortawesome/free-solid-svg-icons';
import styles from './SideMenuComponent.module.scss';

const SideMenuComponent = () => (
  <nav className={styles.sideMenuContainer}>
    <div className={styles.tracBrand}>
      <FontAwesomeIcon icon={faLaptop}/>
      <h1>TRACMOBILITY</h1>
    </div>
    <div className={styles.kpiSection}>
      <FontAwesomeIcon icon={faProjectDiagram}/>
      <h3>KPI Dashboard</h3>
    </div>
    <div className={styles.taskManagementSection}>
      <h3>Task Management</h3>
      <a href="#">
        <FontAwesomeIcon icon={faMap}/>
        <p>Task Map</p>
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faListAlt}/>
        <p>Task List</p>
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faPlusSquare}/>
        <p>Task Creation</p>
        <FontAwesomeIcon icon={faChevronRight} className={styles.taskCreationChevron} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faCogs} />
        <p>Rule Setting</p>
      </a>
    </div>
    <div className={styles.operationCenterSection}>
      <h3>Operation Center</h3>
      <div>
        <FontAwesomeIcon icon={faQrcode}/>
        <NavDropdown title="Vehicle Information" id="vehicle-information-dropdown">
          <NavDropdown.Item eventKey="vehicle-list">Vehicle List</NavDropdown.Item>
          <NavDropdown.Item eventKey="vehicle-map">Vehicle Map</NavDropdown.Item>
          <NavDropdown.Item eventKey="vehicle-search">Vehicle Search</NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  </nav>
);

export default SideMenuComponent;
