import StartActivity from '@/views/StartActivity';
import LoginActivity from '@/views/LoginActivity';
import ApplicantMain from '@/views/Layout';

export interface routeConfig {
  path: string,
  name: string,
  meta: any,
  component: any,
  exact: boolean,
  children: Array<routeConfig>
}


const router: Array<routeConfig> = [
  {
    path: '/',
    name: 'dash',
    meta: {},
    exact: false,
    component: ApplicantMain,
    children: []
  },
  {
    path: '/start',
    name: 'start',
    meta: {},
    exact: true,
    component: StartActivity,
    children: []
  },
  {
    path: '/login',
    name: 'login',
    meta: {},
    exact: true,
    component: LoginActivity,
    children: []
  }
];



export default router