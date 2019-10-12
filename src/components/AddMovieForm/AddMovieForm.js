// vendor
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// component
import FormHeader from "../FormHeader/FormHeader";
// actions
import { addMovie } from "../../actions/movie.actions";

// styles
import "./AddMovieForm.css";

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      rating: null,
      website: "",
      error: false
    };
    this.baseState = { ...this.state };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  requiredFields = ["name", "genre", "rating"];

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitForm = e => {
    let error = false;
    this.requiredFields.forEach(field => {
      if (!!!this.state[field]) {
        error = true;
        return;
      }
    });
    if (error) {
      this.setState({
        error: true
      });
    } else {
      this.props.addMovieToList(this.state);
      this.setState(this.baseState);
    }

    e.preventDefault();
  };

  addMovieList = movieItem => {
    this.setState({ movieList: this.state.movieList.concat[movieItem] });
  };

  backToHome = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />
        <button className="add-movie-button" onClick={() => this.backToHome()}>
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
        </button>
        <div className="col-12 form-body">
          <form action="#" onSubmit={this.submitForm}>
            <div className="wrapper">
              <label className="label" htmlFor="MovieName">
                Movie Name*
              </label>
              <input
                id="MovieName"
                name="name"
                type="text"
                tabIndex="1"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select
                name="genre"
                value={this.state.genre}
                onChange={this.handleInputChange}
              >
                <option value="">select</option>
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
                checked={this.state.rating === "1"}
                onChange={this.handleInputChange}
              />
              1
              <input
                type="radio"
                name="rating"
                value="2"
                checked={this.state.rating === "2"}
                onChange={this.handleInputChange}
              />
              2
              <input
                type="radio"
                name="rating"
                value="3"
                checked={this.state.rating === "3"}
                onChange={this.handleInputChange}
              />
              3
              <input
                type="radio"
                name="rating"
                value="4"
                checked={this.state.rating === "4"}
                onChange={this.handleInputChange}
              />
              4
              <input
                type="radio"
                name="rating"
                value="5"
                checked={this.state.rating === "5"}
                onChange={this.handleInputChange}
              />
              5
            </div>
            <div className="wrapper">
              <label className="label" htmlFor="Website">
                Website
              </label>
              <input
                id="Website"
                name="website"
                value={this.state.website}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="wrapper submit-btn">
              <input
                id="Submit"
                name="Submit"
                type="submit"
                value="Submit"
                tabIndex="5"
                onClick={() => {}}
              />
            </div>
            {this.state.error ? "Please fill the required fields" : null}
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovieToList: movie => dispatch(addMovie(movie))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddMovieForm)
);
