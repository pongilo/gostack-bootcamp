import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([
    'ReactJs',
    'React Native'
  ]);
  const [newTech, setNewTech] = useState('');

  // useCallback é parecido com o useMemo so q ele retorna uma função
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  // componentWillMount
  // Executa uma função assim q o componente deixa de ser montado
  // Apenas colocar um return

  // Como o array de dependencia esta vázio essa função sera executada apenas uma vez
  // componentdidmount
  useEffect(() => {
    const storageTech =  localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech))
    }
  }, []);
  
  // Parametros:
  // 1º Função a ser executado
  // 2º Quando a função sera executada,
  // 3º Array de depencia q fica monitorando alteraçoes de variaveis
  // ComponentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  // useMemo é indicado para quando faz calculos
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br/>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
