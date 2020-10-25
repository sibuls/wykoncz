import React from 'react';

const Search = () => {
  return (
    <form action='' className='search'>
      <div className='search__box'>
        <input
          type='text'
          className='search__input'
          name=''
          placeholder='Wyszukaj ...'
        />
        {/* <button className='search__button'>
          <i class='fas fa-search search__ico'></i>
        </button> */}
      </div>
    </form>
  );
};

export default Search;
