import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar';
import { Main } from './Main';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main nome="Flavio" ></Main>
      <Footer></Footer>
    </div>
  ); //
}

export default App;
