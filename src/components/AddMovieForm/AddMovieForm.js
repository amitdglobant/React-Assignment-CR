// vendor
import React from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";

class AddMovieForm extends React.Component {
  render() {
    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />
        <button
          className="add-movie-button"
          onClick={() => {
            this.props.history.push("/")
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
              <input id="MovieName" name="MovieName" type="text" tabIndex="1" />
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select name="Genre">
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
              <div className='radio-container'>
                <input type="radio" name="rating" value="1" label="1"/>1
                <input type="radio" name="rating" value="2" />2
                <input type="radio" name="rating" value="3" />3
                <input type="radio" name="rating" value="4" />4
                <input type="radio" name="rating" value="5" />5
              </div>
            </div>
            <div className="wrapper">
              <label className="label" htmlFor="Website">
                Website
              </label>
              <input id="Website" name="Website" />
            </div>
            <div className="wrapper submit-btn">
              <input
                id="Submit"
                name="Submit"
                type="submit"
                value="Submit"
                tabIndex="5"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMovieForm;
