import logo from './logo.svg';
import './App.css';
import { Contador, PrimerComponente } from './componentes/PrimerComponente';
import { Saludo, Title } from './componentes/Saludo';
import { PortalModal } from './componentes/portals';
import { useState } from 'react';
import Productos from './iteraciones/iterandoObjetos';
import Imagenes from './iteraciones/iterandoComponentes';
import Refs from './iteraciones/refs';
import InputNoControlado from './iteraciones/inputNoControlado';
import Input from './iteraciones/inputNoControlado';
import InputControlado from './iteraciones/inputsControlados';
import Person from './componentes/PersonMap';



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
      <Productos />
      <Imagenes/>
      <Refs/>
      <Input/>
      <InputControlado/>
      <Person/>

    </div>


  )
}








export default App;
