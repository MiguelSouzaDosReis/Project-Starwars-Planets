//  no useEffect, me basei no codigo do Daniel Pordeus
// https://github.com/tryber/sd-015-b-project-starwars-planets-search/pull/95/commits/1f308bbb41c70205d6763e9d8bfe82126af51f99

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './context';

function Provider({ children }) {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [starWars, SetStarwars] = useState([]);
  const [input, SetInput] = useState('');
  const [filterColumn, setFilterColumn] = useState([]);
  const [dates, SetDates] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0 });
  const [columns, setColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const fetchStarWars = async () => {
    const { results } = await fetch(url).then((response) => response.json());
    SetStarwars(results);
  };

  useEffect(() => {
    fetchStarWars();
    setFilterColumn(starWars);
  }, [starWars]);

  const context = {
    starWars,
    SetInput,
    input,
    dates,
    SetDates,
    filterColumn,
    setFilterColumn,
    columns,
    setColumns,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
