import StartActivity from '@/views/StartActivity';
import LoginActivity from '@/views/LoginActivity';
import ApplicantMain from '@/views/Layout';
import HomeFragment from '@/views/Layout/HomeFragement';
import ListViewFragment from '@/views/Layout/ListViewFragment';
import MessageFragment from '@/views/Layout/MessageFragement';
import PersonFragment from '@/views/Layout/PersonilFragment';

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
    name: 'start',
    meta: {},
    exact: true,
    component: StartActivity,
    children: []
  },
  {
    path: '/dash',
    name: 'dash',
    meta: {},
    exact: false,
    component: ApplicantMain,
    children: [
      {
        path: '/dash/home',
        name: 'homeFragment',
        meta: {},
        exact: false,
        component: HomeFragment,
        children: []
      },
      {
        path: '/dash/listView',
        name: 'listviewFragment',
        meta: {},
        exact: false,
        component: ListViewFragment,
        children: []
      },
      
      {
        path: '/dash/message',
        name: 'listviewFragment',
        meta: {},
        exact: false,
        component: MessageFragment,
        children: []
      },
      
      {
        path: '/dash/person',
        name: 'listviewFragment',
        meta: {},
        exact: false,
        component: PersonFragment,
        children: []
      }
    ]
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