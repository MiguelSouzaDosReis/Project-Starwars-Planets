import React, { useEffect, useState } from 'react';
import Table from '../componetes/Table';
import MyContext from './context';

function Provider() {
  const [starWars, SetStarwars] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchStarWars = async () => {
    const { results } = await fetch(url).then((response) => response.json());
    SetStarwars(results);
  };

  useEffect(() => {
    fetchStarWars();
  }, []);

  const context = {
    starWars,
  };

  return (
    <MyContext.Provider value={ context }>
      <Table />
    </MyContext.Provider>
  );
}

export default Provider;
