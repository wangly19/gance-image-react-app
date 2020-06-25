import React from "react";
import { Switch, Route } from "react-router-dom";
import { routeConfig } from './index';


const renderRoutes = (router: Array<routeConfig>, extraProps = {}, switchProps = {}) =>
router ? (
 <Switch {...switchProps}>
  {router.map((route: routeConfig, i: number) => ( 
  <Route
   key={route.name || i}
   path={route.path}
   exact={route.exact}
   render={props => (
    <route.component {...props} {...extraProps} route={route} />
   )}
  />
  ))}
 </Switch>) : null;
export default renderRoutes;
