import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import Comp from './Comp'

function App() {

  //STATE
  //gli state sono variabili che quando cambiano fanno renderizzare di nuovo il component

  //per creare uno state usiamo un hook useState()
  // let counter = 0
  //useState(val) -> val è il valore iniziale
  // let [c, setC] = useState(0) //[val, func]//versione variabile semplice
  let [c, setC] = useState({name:"Flavio", last_name: "Martinelli"}) //[val, func]
  //desctructuring del return per avere 2 variabili
  //val -> la nostra variabile (la usiamo per visualizzare) solo lettura
  //func -> la funzione per modificare la variabile e re-renderizzare il component
  
  
  //hook -> delle funzioni che ci permettono di aggiunere logica in un punto dell'esecuzione di un software che non possiamo modificare

  const aumenta = ()=>{
    // counter++
    // console.log(counter);
    // setC(c+1) //versione variabile semplice
    // setC({last_name: c.last_name+"!"}) //questo toglierebbe name da c
    // setC({name: c.name, last_name: c.last_name+"!"})
    setC({...c, last_name: c.last_name+"!"}) //per mantenere tutti le proprietà uguali e modificare solo last_name
  }

  return (
    <div className="App">
      <header className="App-header">
        <Comp></Comp>
        <h1>Hai cliccato {c.name} {c.last_name} volte</h1>
        <Button variant="danger" onClick={aumenta}>Aumenta</Button>
      </header>
    </div>
  );
}

export default App;
