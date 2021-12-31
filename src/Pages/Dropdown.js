// para fazer o setState do objeto colum do dates, utilizei esse videio para me bassear
// https://www.youtube.com/watch?v=-3lL8oyev9w
import React, { useContext } from 'react';
import MyContext from '../context/context';

function Dropdown() {
  const { dates, SetDates, columns } = useContext(MyContext);
  const { value } = dates;
  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (event) => SetDates({ ...dates, column: event.target.value }) }
      >
        {columns.map((element) => (
          <option key={ element } value={ element }>{element}</option>
        ))}
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
