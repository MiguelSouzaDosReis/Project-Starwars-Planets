// na função handleClick, me basei no codigo do Fernando Segregio
// https://github.com/tryber/sd-015-b-project-starwars-planets-search/pull/41/commits/a95ef5909e94d7bfabeb00e0a2547d04e4a67a9a
// Para fazer o requisito 4 consultuei o codigo de Matheus Pessoa
// https://github.com/tryber/sd-015-b-project-starwars-planets-search/pull/97/commits/ae810943e099fa99be4989798f59986df9d679f8

import React, { useContext } from 'react';
import MyContext from '../context/context';

function Table() {
  const { starWars, input, dates, setFilterColumn,
    filterColumn, setColumns, columns } = useContext(MyContext);
  function handleClick() {
    const { column, comparison, value } = dates;
    const newFilter = starWars.filter((elemnt) => {
      switch (comparison) {
      case 'maior que':
        return parseFloat(elemnt[column]) > parseFloat(value);
      case 'menor que':
        return parseFloat(elemnt[column]) < parseFloat(value);
      case 'igual a':
        return parseFloat(elemnt[column]) === parseFloat(value);
      default:
        return comparison;
      }
    });
    setFilterColumn(newFilter);
    setColumns(columns.filter((element) => element !== column));
  }
  return (
    <div>
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Enviar
      </button>
      <table>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>

        {filterColumn.filter((element) => element.name.toLowerCase()
          .includes(input.toLowerCase()))
          .map((element, index) => (
            <tr key={ index }>
              <td>{element.name}</td>
              <td>{element.rotation_period}</td>
              <td>{element.orbital_period}</td>
              <td>{element.diameter}</td>
              <td>{element.climate}</td>
              <td>{element.gravity}</td>
              <td>{element.terrain}</td>
              <td>{element.surface_water}</td>
              <td>{element.population}</td>
              <td>
                {element.films.map((el, id) => (
                  <p key={ id }>{el}</p>
                ))}
              </td>
              <td>{element.created}</td>
              <td>{element.edited}</td>
              <td>{element.url}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Table;
