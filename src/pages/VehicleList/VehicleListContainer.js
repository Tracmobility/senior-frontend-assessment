/* eslint-disable no-unused-vars */
import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchVehiclesApiRequest from '../../api/vehiclesApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styles from './VehicleListContainer.module.scss';

const VehicleListContainer = ({ vehiclesStore, fetchVehiclesApiRequest }) => {
  useLayoutEffect(() => {
    fetchVehiclesApiRequest();
  }, []);

  return (
    <main className={styles.vehicleListContainer}>
      <div className={styles.vehicleListContainer}>
        <div className={styles.vehicleListTitleOptionsBar}>
          <h2>Vehicle List</h2>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
    </main>
  )
};

VehicleListContainer.propTypes = {
  fetchVehiclesApiRequest: PropTypes.func.isRequired,
  vehiclesStore: PropTypes.shape({
    loading: PropTypes.bool,
    vehicles: PropTypes.shape({
      content: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  vehiclesStore: state.vehiclesStore,
});

const mapDispatchToProps = dispatch => ({
  fetchVehiclesApiRequest: () => dispatch(fetchVehiclesApiRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleListContainer);