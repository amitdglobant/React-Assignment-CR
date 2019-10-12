// vendor
import React from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      MovieName: '',
      Genure:'',
      Rating:'',
      Website:'',
  };
   }
  onAddMovie= () => {
    console.log("onAddMovie",this.state);
    this.props.onAddMovie(this.state);
  }
  onMovieChange=(event)=>{
    console.log("onMovieChange",event.target.value);
    this.setState({MovieName: event.target.value});
  }
  websiteChange=(event)=>{
    console.log("websiteChange",event.target.value);
    this.setState({Website: event.target.value});
  }
  setRating=(event)=>{
    console.log("setRating",event.target.value);
    this.setState({Rating: event.target.value});
  }
  handleGenreChange=(event)=>{
    console.log("handleGenreChange",event.target.value);
    this.setState({Genure: event.target.value});
  }
  render() {
    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />
        <button
          className="add-movie-button"
          onClick={() => {

          }}
        >
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
        </button>
        <div className="col-12 form-body">
          <form action="#" onSubmit={this.onAddMovie}>
            <div className="wrapper">
              <label className="label" htmlFor="MovieName">
                Movie Name*
              </label>
              <input id="MovieName" name="MovieName" type="text" tabIndex="1" value={this.state.MovieName} onChange={this.onMovieChange}  />
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select name="Genre" onChange={this.handleGenreChange} >
                <option value="Science Fiction">Science Fiction</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Documentary">Documentary</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="wrapper" onChange={this.setRating}>
              <label className="label" htmlFor="rating">
                Rating*
              </label>
              <input type="radio" name="rating" value="1" label="1" />1
              <input type="radio" name="rating" value="2" />2
              <input type="radio" name="rating" value="3" />3
              <input type="radio" name="rating" value="4" />4
              <input type="radio" name="rating" value="5" />5
            </div>
            <div className="wrapper" >
              <label className="label" htmlFor="Website">
                Website
              </label>
              <input id="Website" name="Website"  value={this.state.Website} onChange={this.websiteChange}  />
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
