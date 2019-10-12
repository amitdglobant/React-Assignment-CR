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
      movieName: '',
      errMessage: '',
      genre: '',
      websiteName: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeMovie = this.onChangeMovie.bind(this);
    this.onChangeWebsite = this.onChangeWebsite.bind(this)
  }

  onChangeMovie(e) {
    this.setState({
      movieName: e.target.value,
    })
  };

  onChangeWebsite(e) {
    this.setState({
      websiteName: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    (this.state.movieName.match(/^[A-Za-z]+$/)) ? this.setState({validUser: true}) : this.setState({errMessage: 'Please add movie'})
  };

  disable() {

  }

  render() {
    return (
      <div className="row">
        <FormHeader formTitle={this.state.movieName} />
        <button
          className="add-movie-button"
          onClick={() => {

          }}
        >
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
        </button>
        <div className="container">
          <div className="">
            <div className="col-md-8 form-body">
              <form action="#" onSubmit={this.onSubmit}>
                <div className="error">{this.state.validUser ? this.props.history.push('/') : <div>{this.state.errMessage}</div>}</div>
                <div className="form-group row">
                <label className="col-sm-4 col-form-label">
                    Movie Name*
                  </label>                  
                  <div className="col-sm-8">
                    <input type="text" className="form-control"
                    value={this.state.movieName} onChange={this.onChangeMovie} />

                  </div>
                  
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label" id="Genre" htmlFor="Genre">
                      Genre*
                    </label>
                  <div className="col-sm-8">
                    <select name="Genre" className="form-control" value={this.state.genre}>
                      <option value="Science Fiction">Science Fiction</option>
                      <option value="Drama">Drama</option>
                      <option value="Action">Action</option>
                      <option value="Horror">Horror</option>
                      <option value="Comedy">Comedy</option>
                      <option value="Documentary">Documentary</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label" htmlFor="rating">
                    Rating*
                  </label>
                    <div className="col-sm-8">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="rating" value="1" id="radio1" />
                        <label className="form-check-label" for="radio1">1</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="rating" value="2" id="radio2" />
                        <label className="form-check-label" for="radio2">2</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="rating" value="3" id="radio3" />
                        <label className="form-check-label" for="radio3">3</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="rating" value="4" id="radio4" />
                        <label className="form-check-label" for="radio4">4</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="rating" value="5" id="radio5" />
                        <label className="form-check-label" for="radio5">5</label>
                      </div>
                    </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label" htmlFor="Website">
                    Website
                  </label>
                  <div className="col-sm-8">
                    <input id="Website" name="Website" className="form-control" value={this.state.websiteName} onChange={this.onChangeWebsite} />
                  </div>
                </div>
                <div className="form-group row submit-btn">
                  <div className="col-sm-4"></div>
                  <div className="col-sm-8">
                    <input
                      id="Submit"
                      name="Submit"
                      type="submit"
                      value="Submit"
                      tabIndex="5"
                      className="btn btn-primary"
                      disable={this.disable()}                    
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMovieForm;
