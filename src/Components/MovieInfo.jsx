import React, { Component } from 'react';



class MovieInfo extends Component {
  constructor(props) {
      super(props);

      this.state = {
        
      }
  }

  componentDidMount() {

  }

  componentDidUpdate() {
      
  }

  getMovieInfo() {

  }

  render() {
    return <div>
        {this.props.title}
  <div className="status">{this.props.watched ? 'watched' : 'notwatched'}</div>
        </div>
  }
}


export default MovieInfo;