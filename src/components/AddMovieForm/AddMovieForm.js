// vendor
import React from "react";
import { connect } from "react-redux";
// component
import FormHeader from "../FormHeader/FormHeader";
import { ADD_MOVIE } from "../../constants";
// styles
import "./AddMovieForm.css";

class AddMovieForm extends React.Component {
  state = {
    name: "",
    genre: "Science Fiction",
    rating: -1,
    website: ""
  };

  onChangeMovieName = e => {
    const enteredName = e.target.value;
    const isValidName = /^[A-Za-z]+$/.test(enteredName);

    if (isValidName || enteredName === "") {
      this.setState({ name: enteredName });
    }
  };

  onChangeGenre = e => {
    this.setState({ genre: e.target.value });
  };

  onChangeRating = e => {
    this.setState({ rating: e.target.value });
  };

  onChangeWebsite = e => {
    this.setState({ website: e.target.value });
  };

  onClickSubmit = e => {
    e.preventDefault();

    const { website } = this.state;

    if (website !== "") {
      const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=])/;
      const isValidUrl = urlRegex.test(website);
      if (!isValidUrl) {
        alert("Please enter valid url.");
        return;
      }
    }

    this.props.addMovie(this.movieActionCreator(this.state));

    alert("Movie added successfully");
    this.setState({ name: "", genre: "", rating: -1, website: "" });
  };

  movieActionCreator = movie => {
    const movieAction = {
      type: ADD_MOVIE,
      data: movie
    };

    return movieAction;
  };

  render() {
    const { name, genre, rating } = this.state;

    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />
        <button
          className="add-movie-button"
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
        </button>
        <div className="col-12 form-body">
          <form action="#">
            <div className="wrapper">
              <label className="label" htmlFor="MovieName">
                Movie Name*
              </label>
              <input
                id="MovieName"
                name="MovieName"
                type="text"
                tabIndex="1"
                onChange={this.onChangeMovieName}
                value={name}
              />
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select name="Genre" onChange={this.onChangeGenre} value={genre}>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Documentary">Documentary</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="wrapper">
              <label className="label" htmlFor="rating">
                Rating*
              </label>
              <input
                type="radio"
                name="rating"
                value="1"
                label="1"
                onChange={this.onChangeRating}
              />
              1
              <input
                type="radio"
                name="rating"
                value="2"
                onChange={this.onChangeRating}
              />
              2
              <input
                type="radio"
                name="rating"
                value="3"
                onChange={this.onChangeRating}
              />
              3
              <input
                type="radio"
                name="rating"
                value="4"
                onChange={this.onChangeRating}
              />
              4
              <input
                type="radio"
                name="rating"
                value="5"
                onChange={this.onChangeRating}
              />
              5
            </div>
            <div className="wrapper">
              <label className="label" htmlFor="Website">
                Website
              </label>
              <input
                id="Website"
                name="Website"
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="wrapper submit-btn">
              <input
                id="Submit"
                name="Submit"
                type="submit"
                value="Submit"
                tabIndex="5"
                disabled={name === "" || genre === "" || rating === -1}
                onClick={this.onClickSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movieAction => dispatch(movieAction)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddMovieForm);
