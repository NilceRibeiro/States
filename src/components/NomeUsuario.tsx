import { useState } from 'react';

function NomeUsuario() {
  const [nome, setNome] = useState('');

  function eventoDeonChange (event: React.ChangeEvent<HTMLInputElement>) {
    setNome(event.target.value);
  }
  return (
    <div>
      <h2>Bem-vindo(a): {nome}</h2>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={eventoDeonChange}
      />
    </div>
  );
}

export default NomeUsuario;
