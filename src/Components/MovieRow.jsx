import React from 'react';

const MovieRow = ({ title, onClick }) => {
  return (
    <div onClick={onClick}>
      {title}
    </div>
  );
};

// needs name of movie
// add button to toggle watched/not
//   signal movie

export default MovieRow;
