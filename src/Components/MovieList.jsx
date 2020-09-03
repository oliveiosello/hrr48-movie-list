// est component for movie list
// export movie list (& import in App)
import React, { Component } from 'react';
import MovieRow from './MovieRow.jsx';


class MovieList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: initialMovies,
            movie: {},
            query: '',
            suggestion: ''
        }
    }

    render() {
        console.log(this.state)
        const {suggestion, query, movies} = this.state
        const searchedMovies = movies.filter(movie => {
            return movie.title.toLowerCase().includes(query.toLowerCase());
        })

        return (
            <div>
                <label htmlFor="search">See If We Have Any In Common </label>
                <input type="text" value={suggestion} 
                    onChange={(e) => this.setState({suggestion: e.target.value})}/>
                <input type="text" value={query} 
                    onChange={this.movieFilterOnChange.bind(this)}/>
                <button onClick={this.addSuggestion.bind(this)}>add</button>
                <div className="movie-list">
                    {searchedMovies.length === 0 && 'watch more movies!'}
                    {searchedMovies.map((movie) => 
                    <MovieRow 
                    title={movie.title} 
                    watched={movie.watched}
                    onToggle={() => this.toggleMovie(movie.title)}
                    />
                    )}
                </div>
            </div>
        )

    }

    movieFilterOnChange(event) {
        this.setState({
            query: event.target.value
        })
    }

    addSuggestion() {
        const newMovies =
         [{title: this.state.suggestion}].concat(this.state.movies)
        this.setState({
            suggestion: '',
            movies: newMovies
        })
    }

    toggleMovie(title) {
        const newMovies = 
        this.state.movies.map((movie) => {
            if (movie.title === title) {
                return {title: movie.title, watched: !movie.watched}
            } else {
                return movie
            }
        })
        this.setState({
            movies: newMovies
        })
    }

};

  
var initialMovies = [
    {title: 'Fifth Element'},
    {title: 'Legend'},
    {title: 'Barbarella'},
    {title: 'The Florida Project'},
    {title: 'Mermaids'},
];

export default MovieList;