// No requisito 2 olhei o repositorio de Vinicius Santana
// https://github.com/tryber/sd-015-b-project-starwars-planets-search/pull/101/commits/1a0cd46cbf951739fc7f0cb561125d7f23a648e5

import React from 'react';
import Table from './Pages/Table';
import Input from './Pages/Input';
import Dropdown from './Pages/Dropdown';
import Provider from './context/provider';

function App() {
  return (
    <Provider>
      <Dropdown />
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
