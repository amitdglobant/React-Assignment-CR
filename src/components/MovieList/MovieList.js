import React, { Component } from "react";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";

class MovieList extends Component {
  render() {
    // TODO:: The list shown should be sorted by ratings, in descending order
    // TODO:: If no data in movieList, show message - 'No movies found to display'
    console.log('Movie List:', this.props.movieList)
    
    
     const list = !this.props.movieList ? <div>No movies found to display</div>:
      this.props.movieList && 
      this.props.movieList.map(movie => {
        return (
          <div className="movie">
            {/* TODO:: Convert this div into a link (website filled), 
          on click, the link should open in new tab
          */}
            <div>{movie.name}</div>
            <div>({movie.genre})</div>
            <div>
              <span className="fa fa-star" /> {movie.rating}/5
            </div>
          </div>
        );
      });

    return (
      <div>
        <FormHeader formTitle="Movie list" />
        <button
          className="add-movie-button"
          onClick={() => {
            debugger;
            this.props.history.push("/add-movie");
          }}
        >
          <i className="fa fa-plus" />
        </button>
        {list}
      </div>
    );
  }
}

export default MovieList;
