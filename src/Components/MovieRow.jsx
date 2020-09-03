import React from 'react';

const MovieRow = ({title, watched, onToggle, onClick}) => {
return <div onClick={onClick}>
{title} <button onClick={onToggle}>{watched ? 'seen it' : 'new'}</button>
</div>
}


// needs name of movie
// add button to toggle watched/not
//   signal movie




export default MovieRow;