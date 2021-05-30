import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchVehiclesApiRequest from '../../api/vehiclesApi';
import SideMenuComponent from './components/SideMenu/SideMenuComponent';

const VehicleListPageContainer = ({ vehiclesStore, fetchVehiclesApiRequest }) => {
  const { loading, vehicles } = vehiclesStore;

  useLayoutEffect(() => {
    fetchVehiclesApiRequest();
  }, []);

  return (
    <SideMenuComponent loadingStatus={loading} />
  )
};

VehicleListPageContainer.propTypes = {
  fetchVehiclesApiRequest: PropTypes.func.isRequired,
  vehiclesStore: PropTypes.shape({
    loading: PropTypes.bool,
    vehicles: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = state => ({
  vehiclesStore: state.vehiclesStore,
});

const mapDispatchToProps = dispatch => ({
  fetchVehiclesApiRequest: () => dispatch(fetchVehiclesApiRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleListPageContainer);