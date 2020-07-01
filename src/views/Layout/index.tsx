import React, { useEffect } from 'react';
import './index.scss';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import Album from '@material-ui/icons/Album';
import CameraEnhance from '@material-ui/icons/CameraEnhance';
import Drafts from '@material-ui/icons/Drafts';
import renderRoutes from '@/plugin/router/createRouteElement';


function ApplicantMain(props: any) {

  const [value, setValue] = React.useState<string>('/dash/home');

  const bindBottonNavigationChange = (event: React.ChangeEvent<{}>, newValue: string) => setValue(newValue);

  useEffect(() => {
    props.history.push(value) 
    console.log(value, props.history)
  }, [value, props.history])

  return (
    <div className="layout-activity">
      <main className="layout-wrapper">
        { renderRoutes(props.route.children, {}, {path: '/home'}) }
      </main>
      <div className="nav-wrapper">
        <BottomNavigation value={ value } onChange={ bindBottonNavigationChange }>
          <BottomNavigationAction label="首页" value="/dash/home" icon={<CameraEnhance />} />
          <BottomNavigationAction label="Favorites" value="/dash/listview" icon={<Album />} />
          <BottomNavigationAction label="Nearby" value="/dash/message" icon={<Drafts />} />
          <BottomNavigationAction label="Folder" value="/dash/person" icon={<InsertEmoticon />} />
        </BottomNavigation>
      </div>
    </div>
  )
}

export default ApplicantMain
