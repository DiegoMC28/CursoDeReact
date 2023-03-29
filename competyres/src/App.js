import logo from './logo.svg';
import './App.css';
import BarraMenu from './Componentes/BarraMenu/BarraMenu';

function App() {
  return (
    <div className='fondoOscuro'>
      <img src={logo} className="App-logo"></img>
      <BarraMenu></BarraMenu>
    </div>
  );
}

export default App;
