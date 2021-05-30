import { 
  FETCH_VEHICLE_REQUEST, FETCH_VEHICLE_SUCCESS,
  FETCH_VEHICLE_ERROR, FETCH_SINGLE_VEHICLE, FETCH_VEHICLES_ERROR,
} from './vehicleTypes';

const initialState = {
  loading: false,
  vehicles: [],
  singleVehicle: [],
  error: '',
};

const vehicleReducer = ( state = initialState, action) => {
  switch(action.type) {
    case FETCH_VEHICLE_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_VEHICLE_SUCCESS: return {
      ...state,
      loading: false,
      vehicles: action.payload,
      error: '',
    };

    case FETCH_VEHICLES_ERROR: return {
      ...state,
      loading: false,
      vehicles: [],
      error: action.payload
    };

    case FETCH_SINGLE_VEHICLE: return {
      ...state,
      loading: false,
      singleVehicle: action.payload,
      error: '',
    };

    default: return state;
  }
}

export default vehicleReducer;