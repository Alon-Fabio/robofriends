import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        aria-label='Robots search box'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;