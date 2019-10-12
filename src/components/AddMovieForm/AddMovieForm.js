// vendor
import React,{useState} from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";

const AddMovieForm = (props)=> {
  let [movieName,setMovieName] = useState('');
  let [genre,setGenre] = useState('');
  let [rating,setrating] = useState('');
  let [webSite,setWebSite] = useState('');
  console.log(props);
    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />
        <button
          className="add-movie-button"
          onClick={() => {
            props.history.goBack();
          }}
        >
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
        </button>
        <div className="col-12 form-body">
          <form action="#">
            <div className="wrapper">
              <label className="label" htmlFor="MovieName">
                Movie Name*
              </label><br/>
              <input id="MovieName" name="MovieName" type="text" tabIndex="1" 
                value = {movieName}
                onChange = {e=>setMovieName(e.target.value)}
              />
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
              <input type="radio" name="rating" value="1" label="1" />1
              <input type="radio" name="rating" value="2" />2
              <input type="radio" name="rating" value="3" />3
              <input type="radio" name="rating" value="4" />4
              <input type="radio" name="rating" value="5" />5
            </div>
            <div className="wrapper">
              <label className="label" htmlFor="Website">
                Website
              </label>
              <input id="Website" name="Website" 
              value = {webSite}
              onChange = {e=>setWebSite(e.target.value)}
              />
            </div>
            <div className="wrapper submit-btn">              
              <button classname="Disabled" onClick={(e)=>{
                e.preventDefault();
                console.error(props.location.state);
                props.history.goBack();
                
              }}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  
}

export default AddMovieForm;
