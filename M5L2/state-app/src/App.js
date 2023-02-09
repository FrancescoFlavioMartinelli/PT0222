import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import ClassComp from './ClassComp'

function App() {

  let [c, setC] = useState({name:"Flavio", last_name: "Martinelli"}) //[val, func]
  // let [nome, setNome] = useState("Flavio") //[val, func]
  // let [cognome, setCognome] = useState("Martinelli") //[val, func]
  
  const aumenta = ()=>{
    setC({...c, last_name: c.last_name+"!"}) //per mantenere tutti le proprietà uguali e modificare solo last_name
  }

  return (
    <div className="App">
      <header className="App-header">
        <ClassComp></ClassComp>
      </header>
    </div>
  );
}

export default App;
