import './App.css'
import MostrarTexto from './components/MostrarTexto'; 
import {Pai} from './components/paiefilho'
import Tarefa from './components/Tarefa';
import { useState } from 'react';
import Input from './components/input';
import NomeUsuario from './components/NomeUsuario';

type ItemTarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
};

function App() {
  
const [tarefas, setTarefas] = useState<ItemTarefa[]>([
    { id: 1, titulo: 'Estudar React', concluida: false },
    { id: 2, titulo: 'Trabalhar', concluida: false },
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
      <h2>Atividade 1</h2>
      <MostrarTexto /><br></br>
      <h2>Atividade 2</h2>
      <Pai/><br></br>
<h2>Atividade 3</h2>
<h3>Lista de Tarefas</h3>
      {tarefas.map(tarefa => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          onConcluir={() => concluirTarefa(tarefa.id)}
        />
      ))}
<h2>Atividade aula 29/07/2025</h2>
<Input/>
<h2>Atividade 2 aula 29/07/2025</h2>
<NomeUsuario/>
    </div>
  );
}
export default App;
