import { useState } from 'react';

function NomeUsuario() {
  const [nome, setNome] = useState('');

  function eventoDeonChange (event: React.ChangeEvent<HTMLInputElement>) {
    setNome(event.target.value);
    {/*forma mais enxuta não utilizar essa formula */}
  }
  return (
    <div>
      <h2>Bem-vindo(a): {nome}</h2>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={eventoDeonChange} {/* mais enxuto: {(e) => setNome(e.target.value)} */}
      />
    </div>
  );
}

export default NomeUsuario;
