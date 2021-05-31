import React from 'react';
import PropTypes from 'prop-types';
import { MDBDataTable } from 'mdbreact';
import { wordFormatter, batteryFormatter } from '../../../../utils/tableUtils';
import styles from './VehicleTableComponent.module.scss';

const VehicleTableComponent = ({ vehicles }) => {
  if (vehicles.content) {
    const rowData = vehicles.content.map((content, i) => {
      let dataTable = {};
      dataTable = {
        vehicleID: i,
        qrCode: content.qrCode,
        status: wordFormatter(content.status),
        location: '',
        batteryLevel: batteryFormatter(content.batteryLevel),
        operation: (
          <div className={styles.operationButtons}>
            <button className={styles.opEdit} type="button">Edit</button>
            <button className={styles.opOr} type="button">Order</button>
            <button className={styles.opCity} type="button">Change City/Region</button>
            <button className={styles.opStat} type="button">Change Status</button>
          </div>
        ),
      }
      return dataTable
    });

    console.log(vehicles);

    const data = {
      columns: [
        {
          label: 'VehicleID',
          field: 'vehicleID',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'QR Code',
          field: 'qrCode',
          sort: 'asc',
          width: 300,
        },
        {
          label: 'Status',
          field: 'status',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Location',
          field: 'location',
          sort: 'asc',
          width: 250,
        },
        {
          label: 'Battery Level',
          field: 'batteryLevel',
          sort: 'asc',
          width: 120,
        },
        {
          label: 'Operation',
          field: 'operation',
          sort: 'asc',
          width: 800,
        },
      ],
      rows: rowData,
    };

    return (
      <MDBDataTable
        striped
        bordered
        small
        responsive
        data={data}
        className={styles.dataTable}
        maxHeight="200px"
      />
    );
  } else {
    return (
      <h3>Please Wait...</h3>
    )
  }
};

VehicleTableComponent.propTypes = {
  vehicles: PropTypes.shape({
    content: PropTypes.shape(
      PropTypes.shape({
        qrCode: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        batteryLevel: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default VehicleTableComponent;