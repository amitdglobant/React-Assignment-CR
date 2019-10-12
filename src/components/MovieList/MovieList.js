import React, { Component } from "react";
import { connect } from "react-redux";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";

class MovieList extends Component {
  getSortedMovieList = movieList => {
    return movieList.sort((a, b) => b.rating - a.rating);
  };

  render() {
    // TODO:: The list shown should be sorted by ratings, in descending order
    // TODO:: If no data in movieList, show message - 'No movies found to display'
    const temp = this.getSortedMovieList(this.props.movieList);
    console.log("fds: ", temp);
    const list =
      this.props.movieList &&
      this.props.movieList.map((movie, index) => {
        return (
          <div className="movie" key={index}>
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

const mapStateToProps = state => {
  return {
    movieList: state.listOfMovies
  };
};

export default connect(mapStateToProps)(MovieList);
