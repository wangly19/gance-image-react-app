import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routeConfig } from './index';
import Storage from '@/tools/local';

const whitePath: Array<string> = ['/', '404', '/login'];

const renderRoutes = (router: Array<routeConfig>, extraProps = {}, switchProps = {}) =>
router ? (
 <Switch {...switchProps}>
  {router.map((route: routeConfig, i: number) => {
    return <Route
    key={ route.name || i }
    path={ route.path }
    exact={ route.exact }
    render={(props: any) => {
      /**
       * 判断本地是否存有信息
       */
      const token: string | null = Storage.getData<string>('token')
      if (token) {
        // token 存在， 判断是否进入登录页
        if (route.path === '/login') {
          return <Redirect to="/dash">
            <route.component {...props} {...extraProps} route={ route }/>
          </Redirect>
        } else {
          return <route.component {...props} {...extraProps} route={ route }/>
        }
      } else {
        // 是否存在白名单
        if (whitePath.includes(route.path)) {
          return <route.component {...props} {...extraProps} route={ route }/>
        } else {
          return <Redirect to="/login">
            <route.component {...props} {...extraProps} route={ route }/>
          </Redirect>
        }
      }
    }}/>
  })}
 </Switch>) : null;
export default renderRoutes;
