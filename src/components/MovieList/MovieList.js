import React, { Component } from "react";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";
import Movie from '../Movie'

class MovieList extends Component {
  render() {
    const list =
      this.props.movieList &&
      this.props.movieList.sort((a, b) => {
        return b.rating - a.rating // descending order
      }).map(movie => 
          <Movie
            key={movie.name}
            name={movie.name}
            genre={movie.genre}
            rating={movie.rating}
          />
        );
    return (
      <div>
        <FormHeader formTitle="Movie list" />
        <button
          className="add-movie-button"
          onClick={() => {
            this.props.history.push("/add-movie");
          }}
        >
          <i className="fa fa-plus" />
        </button>
        {
          list && list.length > 0 
          ? list : <div className='empty-message'>No movies found to display</div>
        }
      </div>
    );
  }
}

export default MovieList;
