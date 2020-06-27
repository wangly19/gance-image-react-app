import React, { useEffect } from 'react';
import './index.scss';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
          <BottomNavigationAction label="首页" value="/dash/home" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="/dash/listview" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="/dash/message" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="/dash/person" icon={<FolderIcon />} />
        </BottomNavigation>
      </div>
    </div>
  )
}

export default ApplicantMain
