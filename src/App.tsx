import React, { useEffect } from 'react';
import './App.scss';
import router from '@/plugin/router';
import {BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from '@/plugin/router/createRouteElement';


function App() {
  useEffect (() => {
  });
  
  return (
    <div className="App">
      <Router>
        {renderRoutes(router)}
      </Router>
    </div>
  );
}

export default App;
