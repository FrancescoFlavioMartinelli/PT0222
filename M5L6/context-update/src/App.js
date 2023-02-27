import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Component1 } from './ Component';

export const CustomContext = React.createContext()

const value = {
  theme: {
    primary: "#ff0000",
  },
  api: ""


}

const url  = "http://localhost:3001/api";

function App() {

  let prodotto = {
    name: "prod1",
    price: 100
  }

  return (
    <CustomContext.Provider 
    value={value}
    >
      <Component1></Component1>
    </CustomContext.Provider>
  );
}

export default App;
