import React, { Component } from "react";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";

class MovieListView extends Component {
  render() {
    // TODO:: The list shown should be sorted by ratings, in descending order
    // TODO:: If no data in movieList, show message - 'No movies found to display'
     console.log("movielistjs",this.props.movieList);
     let movies= [{ 
        MovieName: 'ABC',
        Genure:'Drama',
        Rating:'4',
        Website:'Test2',
    },
    { 
      MovieName: 'DEF',
      Genure:'Fiction',
      Rating:'3',
      Website:'Test4',
  }]
      const list =
        movies &&
        movies.map(movie => {
        return (
          <div className="movie">
            <div>{movie.MovieName}</div>
            <div>({movie.Genure})</div>
            <div>
              <span className="fa fa-star" /> {movie.Rating}/5
            </div>
          </div>
        );
      });
    return (
      <div>
        <FormHeader formTitle="Movie list" />
        <button
          className="add-movie-button"
        //   onClick={() => {
        //     this.props.history.push("/add-movie");
        //   }}
        >
          <i className="fa fa-plus" />
        </button>
        {list}
      </div>
    );
  }
}

export default MovieListView;
