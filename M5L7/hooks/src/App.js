import logo from './logo.svg';
import './App.css';
import { Hooks } from './Hooks';
import { useEffect, useRef, useState } from 'react';
// import React from 'react'
import { createContext } from 'react';

export const Contesto = createContext(0)

function App() {

  const [counterVisibile, setCounterVisible] = useState(true)

  const decreaseBtnForward = useRef(null)

  useEffect(()=>{
    console.log(decreaseBtnForward);
  })

  return (
    <>
    <button onClick={()=>{setCounterVisible(!counterVisibile)}}>{counterVisibile ? 'nascondi' : 'mostra'}</button>
    <Contesto.Provider value={5}>
      {counterVisibile ? (<Hooks ref={decreaseBtnForward} ></Hooks>) : (<p>mostra di più</p>)}
    </Contesto.Provider>


    <button onClick={()=>{decreaseBtnForward.click()}}>Forward</button>
    </>
    
  );
}

export default App;
