/* eslint-disable no-unused-vars */
import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchVehiclesApiRequest from '../../api/vehiclesApi';
import styles from './VehicleListContainer.module.scss';

const VehicleListContainer = ({ vehiclesStore, fetchVehiclesApiRequest }) => {
  useLayoutEffect(() => {
    fetchVehiclesApiRequest();
  }, []);

  return (
    <h1>VehicleListContainer</h1>
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