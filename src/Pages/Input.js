import React, { useContext } from 'react';
import MyContext from '../context/context';

function Input() {
  const { input, SetInput } = useContext(MyContext);
  function handleChange(event) {
    const { value } = event.target;
    SetInput(value);
  }
  return (
    <div>
      <label htmlFor="input-filte">
        <input
          data-testid="name-filter"
          id="input-filter"
          value={ input }
          name="input"
          onChange={ handleChange }
          type="text"
          placeholder="pesquisa"
        />
      </label>
    </div>
  );
}

export default Input;
