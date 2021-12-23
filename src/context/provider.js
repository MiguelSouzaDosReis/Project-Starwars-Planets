import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './context';

function Provider({ children }) {
  const [starWars, SetStarwars] = useState([]);
  const [input, SetInput] = useState('');
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
    SetInput,
    input,
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
