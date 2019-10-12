import React, { Component } from "react";
import { connect } from "react-redux";
import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";

class MovieList extends Component {
  getMovieList = movieList => {
    return [].concat(movieList).sort((a, b) => b.rating - a.rating);
  };

  render() {
    // TODO:: The list shown should be sorted by ratings, in descending order
    // TODO:: If no data in movieList, show message - 'No movies found to display'
    const list =
      this.props.movieList && this.props.movieList.length
        ? this.getMovieList(this.props.movieList).map(movie => {
            return (
              <div className="movie" key={movie.name + movie.rating}>
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
          })
        : "No movies found to display";
    return (
      <div>
        <FormHeader formTitle="test" />
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
    movieList: state
  };
};

export default connect(
  mapStateToProps,
  null
)(MovieList);
