import logo from './logo.svg';
import './App.css';

import { List } from './List';
import { Form } from './Form';
import { Backoffice } from './Backoffice';

function App() {
  let pagina = false;

  return (
    <div className="App">
      {/* <List></List> */}
      {/* <Form></Form> */}
      <Backoffice></Backoffice>
    </div>
  );
}

export default App;
