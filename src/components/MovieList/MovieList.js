import React, { Component } from "react";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";
import { Link } from 'react-router-dom'
class MovieList extends Component {
  state = {
    list: [],
    message: 'No movies found to display'
  }

 


  render(props) {
    // TODO:: The list shown should be sorted by ratings, in descending order
    // TODO:: If no data in movieList, show message - 'No movies found to display'
    const list =
      this.props.movieList &&
      this.props.movieList.map(movie => {
        return (
          <div className="movie">

            <Link to='/add-movie'>{movie.name}</Link>
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
            this.props.history.push("/add-movie");
          }}
        >
          <i className="fa fa-plus" />
        </button>
        {!this.state.list ? this.state.message :  list 
        }

      </div>
    );
  }
}

export default MovieList;
