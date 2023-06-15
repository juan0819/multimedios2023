import logo from './logo.svg';
import ListarCurso from './componentsCurso/listarCurso';
import MenuPrimcipal from './componentsPlantilla/Menu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as  Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <MenuPrimcipal></MenuPrimcipal>
      <Router>
        <Route></Route>
        <Route></Route>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
