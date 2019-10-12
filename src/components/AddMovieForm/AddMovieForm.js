// vendor
import React from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";

class AddMovieForm extends React.Component {
state = {
  movie : {
    name : '',
    genre : '',
    ratings : '',
    website : ''
  },
  list : []
}




  submitHandle = (e) => {
    e.preventDefault();
    console.log(this.props, "location")

    this.props.history.push("/");
    

  }

  changeHandle = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSelect = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };


  render() {
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
        <div className="col-12 form-body ui center container segment">
          <form action="#" onSubmit={this.submitHandle}>
            <div className="wrapper">
              <label className="label" htmlFor="MovieName">
                Movie Name*
              </label>
              <input required id="MovieName" name="MovieName" type="text" tabIndex="1" onChange={this.changeHandle} />
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select required name="Genre">
                <option value="Science Fiction">Science Fiction</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Documentary">Documentary</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="wrapper form-check form-check-inline">
              <label className="label" htmlFor="rating">
                Rating*
              </label><div >
                <input required type="radio" name="rating" value="1" label="1" />1
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
              <input type="url" id="Website" name="Website" onChange={this.changeHandle} />
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
