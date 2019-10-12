// vendor
import React, { useState } from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";

function AddMovieForm(props) {

  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [rating, setRating] = useState('')
  const [website, setWebsite] = useState('')

  function nameChangeHandler(e) {
    setName(e.target.value)
  }

  function genreChangeHandler(e) {
    setGenre(e.target.value)
  }

  function ratingChangeHandler(e) {
    setRating(e.target.value)
  }

  function websiteChangeHandler(e) {
    setWebsite(e.target.value)
  }

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
            <input
              id="MovieName"
              name="MovieName"
              type="text" tabIndex="1"
              value={name}
              onChange={nameChangeHandler}
            />
          </div>
          <div className="wrapper">
            <label className="label" id="Genre" htmlFor="Genre">
              Genre*
              </label>
            <select name="Genre" value={genre} onChange={genreChangeHandler}>
              {
                [
                  'Science Fiction',
                  'Drama',
                  'Action',
                  'Horror',
                  'Comedy',
                  'Documentary',
                  'Others'
                ].map(g => <option key={g} value={g}>{g}</option>)
              }
            </select>
          </div>
          <div className="wrapper">
            <label className="label" htmlFor="rating">
              Rating*
              </label>
            <div className='radio-container'>
              {
                [1, 2, 3, 4, 5].map(r => 
                  <React.Fragment
                    key={r}
                  >
                    <input
                      type="radio"
                      name="rating"
                      value={r}
                      checked={r==rating}
                      onChange={ratingChangeHandler}
                    />{r}
                  </React.Fragment>
                )
              }
              </div>
          </div>
          <div className="wrapper">
            <label className="label" htmlFor="Website">
              Website
              </label>
            <input
              id="Website"
              name="Website"
              value={website}
              onChange={websiteChangeHandler}
            />
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

export default AddMovieForm;
