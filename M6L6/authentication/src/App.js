import logo from './logo.svg';
import './App.css';

import { Form } from './Form';

function App() {

  const token = localStorage.getItem('token')
  if(token != null) {
    //autologin
  }


  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
