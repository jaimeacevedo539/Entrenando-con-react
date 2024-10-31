import logo from './logo.svg';
import './App.css';
import { Contador, PrimerComponente } from './componentes/PrimerComponente';
import { Saludo, Title } from './componentes/Saludo';
import { PortalModal } from './componentes/portals';
import {  useState } from 'react';


function App() {

  const [isVisible, setVisible] = useState(false);
  
 

  const mostrarPortal = () => setVisible(true);
  const cerrarPortal = () => setVisible(false);

  return (
    <div className="App">
      <button onClick={mostrarPortal}>mostrar portal</button>
      <PortalModal visible={isVisible} onClose={cerrarPortal} >

        <h1>Este es un portal</h1>
      </PortalModal>
      <PrimerComponente />
      <Contador />
      <Saludo saluda />
      <Title />

    </div>


  )
}








export default App;
