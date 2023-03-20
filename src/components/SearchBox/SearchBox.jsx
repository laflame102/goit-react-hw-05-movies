import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBox = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleFormSubmit = evt => {
    evt.preventDefault();

    if (input.trim() === '') {
      alert('input movie name');
      return;
    }

    onSubmit(input);

    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={input}
          onChange={evt => setInput(evt.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
