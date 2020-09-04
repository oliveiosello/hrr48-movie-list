import React, { Component } from 'react';

const getMovieData = (title, onSuccess) => {
  const apiKey = 'api key goes here';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${title}&page=1`;

  $.get(url, (response) => {
    const movie = response.results[0];
    onSuccess(movie);
  });
};

class MovieInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getMovieInfo();
  }

  componentDidUpdate(oldProps) {
    if (this.props.title !== oldProps.title) {
      this.getMovieInfo();
    }
  }

  getMovieInfo() {
    console.log('getting movie info');

    this.setState({
        overview: null,
        releaseDate: null
    })

    getMovieData(this.props.title, (movie) => {
      this.setState({
        rating: movie.popularity,
        overview: movie.overview,
        releaseDate: movie.release_date,
      });
    });
  }

  render() {
    const { rating, overview, releaseDate } = this.state;
    const { onToggle, watched, title} = this.props
    const buttonStyle = {
        background: watched ? 'orange' : 'white',
        border: '2px solid orange'
    }
    return (
      <div className="movie-info">
        <div className="title">
        {title}
        </div>
      <div className="copy">
        <div className="overview">Overview: {overview || "Loading..."}</div>
        <div className="release-date">Release: Date {releaseDate}</div>
        <div className="rating">Rating: {rating}</div>
        <button style={buttonStyle} onClick={onToggle}>seen</button>
      </div>
      </div>
    );
  }
}

export default MovieInfo;
