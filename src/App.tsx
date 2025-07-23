import './App.css'
import MostrarTexto from './components/MostrarTexto'; 
import {Pai} from './components/paiefilho'
import Tarefa from './components/Tarefa';
import { useState } from 'react';

type ItemTarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
};

function App() {
  
const [tarefas, setTarefas] = useState<ItemTarefa[]>([
    { id: 1, titulo: 'Estudar React', concluida: false },
    { id: 2, titulo: 'Fazer exercícios', concluida: false },
    { id: 3, titulo: 'Ler um livro', concluida: false },
  ]);

  const concluirTarefa = (id: number) => {
    setTarefas(prev =>
      prev.map(tarefa =>
        tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
      )
    );
  };

  return (
    <div>
      <h3>Atividade 1</h3>
      <MostrarTexto /><br></br>
      <h3>Atividade 2</h3>
      <Pai/><br></br>

<h2>Lista de Tarefas</h2>
      {tarefas.map(tarefa => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          onConcluir={() => concluirTarefa(tarefa.id)}
        />
      ))}

    </div>
  );
}
export default App;
