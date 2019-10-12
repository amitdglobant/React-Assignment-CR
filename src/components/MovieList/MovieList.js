import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";

class MovieList extends Component {
  render() {
    // TODO:: The list shown should be sorted by ratings, in descending order
    // TODO:: If no data in movieList, show message - 'No movies found to display'
    const list =
      this.props.movieList && this.props.movieList.size === 0 ?
        (
          <div className="no-data">
            No movies found to display
          </div>
        )
      :
      this.props.movieList.valueSeq().sortBy((v, k) => -v.get('rating')).map(movie => {
        return (
          <Link className="movie" to={movie.get('website')} key={movie.get('index')}>
            <div>{movie.get('movieName')}</div>
            <div>({movie.get('genre')})</div>
            <div>
              <span className="fa fa-star" /> {movie.get('rating')}/5
            </div>
          </Link>
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
    movieList : state.get('movies'),
  };
};

export default connect(mapStateToProps, null)(MovieList);
