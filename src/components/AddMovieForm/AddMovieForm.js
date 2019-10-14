// vendor
import React, { useState, useContext } from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";
import { addMovies } from "../../App";

const AddMovieForm = (props) => {
  const AddMoviehandler = useContext(addMovies);
  let [movieName, setMovieName] = useState('');
  let [genre, setGenre] = useState("Science Fiction");
  let [rating, setrating] = useState('');
  let [webSite, setWebSite] = useState('');

  return (
    <div className="row">
      <FormHeader formTitle={"Add your favorite movie"} />
      <button
        className="add-movie-button"
        onClick={() => {
          props.history.push("/");
        }}
      >
        <i className="fa fa-long-arrow-left" aria-hidden="true" />
      </button>
      <div className="col-12 form-body">
        <form>
          <div className="form-group required">
            <label className="label" htmlFor="MovieName">
              Movie Name*
              </label><br />
            <input id="MovieName" name="MovieName" type="text" tabIndex="1"
              value={movieName}
              className="form-control form-control-sm "
              placeholder="Enter Movie name here"
              onChange={e =>{
                if(e.target.value.match(/[a-zA-Z\s]/)){
                  setMovieName(e.target.value)
                }
                
              }
              }
            />
          </div>
          <div className="wrapper" className="form-group">
            <label className="label" id="Genre" htmlFor="Genre">
              Genre*
              </label>
            <select name="Genre" onChange={e => setGenre(e.target.value)} className="form-control">
              <option value="Science Fiction">Science Fiction</option>
              <option value="Drama">Drama</option>
              <option value="Action">Action</option>
              <option value="Horror">Horror</option>
              <option value="Comedy">Comedy</option>
              <option value="Documentary">Documentary</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div >
            <label className="label" htmlFor="rating">
              Rating*
              </label >
            <div className="form-check-input">
              <input type="radio" name="rating" value="1" label="1" onChange={e => setrating(e.target.value)} />1
              <input type="radio" name="rating" value="2" onChange={e => setrating(e.target.value)} />2
              <input type="radio" name="rating" value="3" onChange={e => setrating(e.target.value)} />3
              <input type="radio" name="rating" value="4" onChange={e => setrating(e.target.value)} />4
              <input type="radio" name="rating" value="5" onChange={e => setrating(e.target.value)} />5
              </div>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="Website">
              Website
              </label>
            <input id="Website" name="Website"
              className="form-control form-control-sm"
              placeholder="Enter website URL here"
              value={webSite}
              onChange={e => setWebSite(e.target.value)}
            />
          </div>
          <div className="wrapper submit-btn">
            <button disabled={!(movieName.length && genre.length && rating.length)} type="button" className="btn btn-primary" onClick={(e) => {
              console.log(movieName && genre && rating);
              e.preventDefault();
              AddMoviehandler({ name: movieName, genre: genre, rating: rating, website: webSite });
              props.history.push("/");
            }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default AddMovieForm;
