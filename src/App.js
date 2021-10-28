import StepWizard from 'react-step-wizard';
import { Ganador } from './components/Ganador';
import { Instrucciones } from './components/Instrucciones';
import { Perdiste } from './components/Perdiste';
import { Preguntas } from './components/Preguntas';

function App() {
  return (
    <StepWizard>
      <Instrucciones />
      <Preguntas numeroPregunta={0} />
      <Preguntas numeroPregunta={1} />
      <Preguntas numeroPregunta={2} />
      <Preguntas numeroPregunta={3} />
      <Preguntas numeroPregunta={4} />
      <Preguntas numeroPregunta={5} />
      <Preguntas numeroPregunta={6} />
      <Preguntas numeroPregunta={7} />
      <Preguntas numeroPregunta={8} />
      <Preguntas numeroPregunta={9} />
      <Perdiste />
      <Ganador />
    </StepWizard>
  );
}

export default App;
