// est component for movie list
// export movie list (& import in App)
import React, { Component } from 'react';
import MovieRow from './MovieRow.jsx';
import MovieInfo from './MovieInfo.jsx';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: initialMovies,
      movie: null,
      query: '',
      suggestion: '',
      showSeen: false,
    };
  }

  render() {
    const { suggestion, query, movies, movie } = this.state;

    const searchedMovies = movies
      .filter((movie) => {
        return movie.title.toLowerCase().includes(query.toLowerCase());
      })
      .filter((movie) => !!movie.watched === this.state.showSeen);

    return (
      <div>
        <label htmlFor="search">See If We Have Any In Common </label>
        <input
          type="text"
          value={suggestion}
          onChange={(e) => this.setState({ suggestion: e.target.value })}
        />
        <input
          type="text"
          value={query}
          onChange={this.movieFilterOnChange.bind(this)}
        />
        <button
          title="left-button"
          onClick={() => this.setState({ showSeen: true })}
        > seen </button>
        <button
          title="right-button"
          onClick={() => this.setState({ showSeen: false })}
        > unseen </button>
        <button onClick={this.addSuggestion.bind(this)}>add</button>
        <div className="movie-list">
          {searchedMovies.length === 0 && 'watch more movies!'}
          {searchedMovies.map((movie) => (
            <MovieRow
              title={movie.title}
              onClick={() => this.setState({ movie: movie })}
            />
          ))}
        </div>
        <div className="movie-info">
          {movie && (
            <MovieInfo
              title={movie.title}
              watched={movies.find((m) => m.title === movie.title).watched}
              onToggle={() => this.toggleMovie(movie.title)}
            />
          )}
        </div>
      </div>
    );
  }

  movieFilterOnChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  addSuggestion() {
    const newMovies = [{ title: this.state.suggestion }].concat(
      this.state.movies
    );
    this.setState({
      suggestion: '',
      movies: newMovies,
    });
  }

  toggleMovie(title) {
    const newMovies = this.state.movies.map((movie) => {
      if (movie.title === title) {
        return { title: movie.title, watched: !movie.watched };
      } else {
        return movie;
      }
    });
    this.setState({
      movies: newMovies,
    });
  }
}

var initialMovies = [
  { title: 'Fifth Element' },
  { title: 'Legend' },
  { title: 'Barbarella' },
  { title: 'The Florida Project' },
  { title: 'Mermaids' },
];

export default MovieList;
