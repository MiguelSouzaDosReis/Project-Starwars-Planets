// para fazer o setState do objeto colum do dates, utilizei esse videio para me bassear
// https://www.youtube.com/watch?v=-3lL8oyev9w
import React, { useContext } from 'react';
import MyContext from '../context/context';

function Dropdown() {
  const { dates, SetDates } = useContext(MyContext);
  const { value } = dates;
  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (event) => SetDates({ ...dates, column: event.target.value }) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (event) => SetDates({ ...dates, comparison: event.target.value }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <label htmlFor="number">
        <input
          id="number"
          data-testid="value-filter"
          type="number"
          placeholder="numero"
          value={ value }
          onChange={ (event) => SetDates({ ...dates, value: event.target.value }) }
        />
      </label>
    </div>
  );
}

export default Dropdown;
