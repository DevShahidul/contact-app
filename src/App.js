import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Layout/Header';
import Contacts from './Component/Contacts/Contacts';
import { Provider } from './Context';
import AddContact from './Component/Contacts/AddContact';
//import AddContactRef from './Component/Contacts/AddContact-ref';

config.autoA11y = true;

function App() {
  return (
    <Provider>
      <div className="App">
        <Header brand="Contact Manager"/>
        
        <div className="container mt-5 pb-5">
          <AddContact/>
          <Contacts/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
