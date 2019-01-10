import React from 'react';

// CONTAINERS
import Search from '../containers/search';
import ListOfBooks from '../containers/list_of_books';

const App = () => {
  return (
    <div>
      <Search />
      <ListOfBooks />
    </div>
  );
};

export default App;
