import React from 'react';
import {moviesData} from './moviesData';
import MovieItem from './MovieItem';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    }
  }

  removeMovieById = id =>{
    const updateMovies = this.state.movies.filter(function(movie){
      return movie.id !== id
    })
    this.setState({
      movies: updateMovies
    })
  };

  addMovieToWillWatch = movie =>{
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  };

  removeMovieFromWillWatch = id =>{
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(movie){
      return movie.id !==id
    })
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  };

  render(){
    const { movies, moviesWillWatch } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {movies.map(movie => {
                return(
                  <div className="col-4" key={movie.id}>
                    <MovieItem 
                      item={movie} 
                      removeMovieById={this.removeMovieById}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <h4>Will Watch: {moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              {moviesWillWatch.map(movie =>{
                return(
                  <li key={movie.id} className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">{movie.title}</p>
                      <p className="mb-0">{movie.vote_average}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
