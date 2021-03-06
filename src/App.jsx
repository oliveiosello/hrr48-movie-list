import React from 'react';
// react has to be imported everywhere JSX is used

// 1. import movie list
// 2. render movie list within app
import MovieList from './Components/MovieList.jsx';

const App = () => {
  return (
    <div className="pageTitle">
      <h1>Olive's Favorite Movies</h1>
    </div>
    <div>
      <MovieList />
    </div>
  );
};

export default App;
