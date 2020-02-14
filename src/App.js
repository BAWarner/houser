import React from 'react';
import Header from './Components/Header/Header';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import './App.scss';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
