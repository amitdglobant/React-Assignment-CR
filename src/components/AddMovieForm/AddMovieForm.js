// vendor
import React from "react";
import { connect } from 'react-redux'
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";
import { withRouter } from 'react-router-dom';
import { addTodo } from '../../actions'

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        movieName: "",
        genreName: "Science Fiction",
        rating: "",
        website: "",
        maptodata : false
    };
  }

  ratingSelection = (e) => {
    this.setState({ rating : e.target.value})
  }

  genreSelection = (e) => {
    this.setState({ genreName : e.target.value })
  }

  submitBtnClick = (e) => {
    e.preventDefault();
    let movieName_temp = document.getElementById('MovieName').value;
    let website_temp = document.getElementById('Website').value;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let radios = document.getElementsByName("rating");
    let formValid = false;

    let i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) alert("Must check some option for rating");

    if (movieName_temp.search(/[^a-zA-Z]+/) === -1) {     
      this.setState({ movieName : movieName_temp})
    } else {
      alert(" invalid movie name");
      return false;
    }
    
    if (reg.test(website_temp) === false) {
      alert("invalid website");
      return false;
    } else {
      this.setState({ website : website_temp})
    }
    this.setState({ maptodata : true}, ()=>{
      console.log(this.state.movieName)
      alert(" movie added is "+this.state.movieName+" "+this.state.genreName+" "+this.state.rating+" "+this.state.website)
       
      this.props.addTodo(this.state.movieName,this.state.genreName,this.state.rating,this.state.website)
       
      if(this.state.movieName != '' && this.state.website != '' && this.state.rating != ''){
        this.props.history.push('/');
      }
    })
   
   // this.props.history('/')
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.movieName != this.state.movieName && prevState.website != this.state.website && prevState.rating != this.state.rating){
  //     // go to moivelist page
  //   }
  // }
  render() {
    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />
        <button
          className="add-movie-button"
          onClick={() => {
            this.props.history.push('/');
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
              <input id="MovieName" name="MovieName" type="text" tabIndex="1" required/>
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select name="Genre" onChange={(e) => {this.genreSelection(e)}}>
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
              <input type="radio" name="rating" value="1" label="1" onChange={(e) => {this.ratingSelection(e)}} />1
              <input type="radio" name="rating" value="2" onChange={(e) => {this.ratingSelection(e)}} />2
              <input type="radio" name="rating" value="3" onChange={(e) => {this.ratingSelection(e)}} />3
              <input type="radio" name="rating" value="4" onChange={(e) => {this.ratingSelection(e)}} />4
              <input type="radio" name="rating" value="5" onChange={(e) => {this.ratingSelection(e)}} />5
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
                onClick={(e) => {this.submitBtnClick(e)}}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

//export default AddMovieForm;

const mapDispatchToProps = dispatch => ({
  addTodo: (movieName,genre,rating,site) => dispatch(addTodo(movieName,genre,rating,site))
})

export default connect(
  null,
  mapDispatchToProps
)(AddMovieForm)
