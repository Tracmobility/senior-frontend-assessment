import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VehiclesListContainer from './pages/VehicleList/VehicleListContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={VehiclesListContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
