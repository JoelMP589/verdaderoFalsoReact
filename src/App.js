import StepWizard from 'react-step-wizard';
import { Ganador } from './components/Ganador';
import { Instrucciones } from './components/Instrucciones';
import { Perdiste } from './components/Perdiste';
import { Preguntas } from './components/Preguntas';
import { useState, useEffect } from 'react';

function App() {
  const [screenIsOnLandscape, setScreenIsOnLandscape] = useState(false);


  function isLandscape() {
    const isLandscape = window.innerHeight < window.innerWidth;
    if (isLandscape) {
      setScreenIsOnLandscape(true);
    } else {
      setScreenIsOnLandscape(false);
    }
  }
  window.addEventListener("resize", isLandscape)

  useEffect(() => {
    isLandscape();
  }, []);

  if (screenIsOnLandscape) {
    return (
      <>
        <Instrucciones />
        <Perdiste />
        <Ganador />
        <StepWizard>
          <Preguntas numeroPregunta={1} />
          <Preguntas numeroPregunta={2} />
          <Preguntas numeroPregunta={3} />
          <Preguntas numeroPregunta={4} />
          <Preguntas numeroPregunta={5} />
          <Preguntas numeroPregunta={6} />
          <Preguntas numeroPregunta={7} />
          <Preguntas numeroPregunta={8} />
          <Preguntas numeroPregunta={9} />
          <Preguntas numeroPregunta={10} />
        </StepWizard>
      </>
    );
  } else {
    return (
      <div
      >
        <h4>
          OOPS!
          <p></p>
          FAVOR DE ROTAR SU DISPOSITIVO PARA PODER DISFRUTAR DE ESTA BODYAPP
        </h4>
      </div>
    )
  }
}

export default App;
