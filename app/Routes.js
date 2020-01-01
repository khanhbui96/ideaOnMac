import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import {Link} from 'react-router-dom'
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import  GuestAboutPage from './containers/GuestAboutPage'
import SelectCarPage from './containers/SelectCarPage';
import CalculationPage from './containers/CalculationPage';
import HostAboutPage from './containers/HostAboutPage';
import VehicleProfilePage from './containers/VehicleProfilePage';
import VehicleEquimentPage from './containers/VehicleEquimentPage';
import VehicleVerifyPage from './containers/VehicleVerifyPage'
import DriverCertificatePage from './containers/DriverCertificatePage';
import DriverLevelPage from './containers/DriverLevelPage';
import DriverProfilePage from './containers/DriverProfilePage';
import DefineLevelPage from './containers/DefineLevelPage';
import RegisterCommandPage from './containers/RegisterCommandPage';
import ApproveCommandPage from './containers/ApproveCommandPage'
import MotobikePage from './containers/MotobikePage';
import Home from './components/Home';
import OfflinePage from './containers/OfflinePage';

export default () => (
  <App>
    <Switch>

      <Route path='/host/approveCommand' component={ApproveCommandPage}/>  
      <Route path='/host/driver/defineLevel' component={DefineLevelPage}/>
      <Route path='/host/driver/certificate' component={DriverCertificatePage}/>
      <Route path='/host/driver/level' component={DriverLevelPage}/>
      <Route path='/host/driver/profile' component={DriverProfilePage}/>
      <Route path='/host/vehical/verify' component={VehicleVerifyPage}/>
      <Route path='/host/vehical/equiment' component={VehicleEquimentPage}/>
      <Route path='/host/vehical/profile' component={VehicleProfilePage}/>
      <Route path='/host' component={HostAboutPage}/>
      <Route path='/guest/motoBikes' component={MotobikePage}/> 
      <Route path='/guest/registerCommand' component={RegisterCommandPage}/> 
      <Route path='/guest/calculation' component={CalculationPage}/>
      <Route path='/guest/select' component={SelectCarPage}/>
      <Route path='/guest' component={GuestAboutPage}/>
      <Route path='/register' component={RegisterPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/offline' component={OfflinePage}/>
      <Route path='/' component={Home}/>
    </Switch>
  </App>
);
