// vendor
import React from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";
import{connect} from 'react-redux';
import {addMovie}  from '../../Actions/actions';

class AddMovieForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      MovieName:'',
      genre:'',
      rating:'',
      Website:''
    }
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    },()=> {
      if(!(this.state.MovieName===""||this.state.genre===""||this.state.rating==="")){
        this.setState({
          errorData: false
        })
      }
    });
  }
  submitForm = (e) =>{
      e.preventDefault();
      if(this.state.MovieName===""||this.state.genre===""||this.state.rating===""){
        this.setState({
          errorData: true
        })
        return;
      }
      this.props.onAddMovie({
        MovieName:this.state.MovieName,
        genre:this.state.genre,
        rating:this.state.rating,
        Website:this.state.Website
      });
      this.setState({
        errorData: false
      })
      this.props.history.push("/movie-list");
  }
  render() {
    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />
        <button
          className="add-movie-button"
          onClick={() => {
              window.history.back();
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
              <input id="MovieName" name="MovieName" type="text" tabIndex="1" onChange={this.handleChange} value={this.state.value}/>
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select name="Genre" onChange={this.handleChange} id="genre">
                <option value="">Select Genre</option>
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
              <input type="radio" name="rating" id="rating" value="1" onChange={this.handleChange}/>1
              <input type="radio" name="rating" id="rating" value="2" onChange={this.handleChange}/>2
              <input type="radio" name="rating" id="rating" value="3" onChange={this.handleChange}/>3
              <input type="radio" name="rating" id="rating" value="4" onChange={this.handleChange}/>4
              <input type="radio" name="rating" id="rating" value="5" onChange={this.handleChange}/>5
            </div>
            <div className="wrapper">
              <label className="label" htmlFor="Website">
                Website
              </label>
              <input id="Website" name="Website"  onChange={this.handleChange}/>
            </div>
            <div className="wrapper submit-btn">
              {/* <Link to={{pathname:'/movie-list',state:{movie:this.state}}}> */}
              {/* <a href="/movie-list"></a> */}
              <input
                id="Submit"
                name="Submit"
                type="submit"
                value="Submit"
                tabIndex="5"
                onClick={this.submitForm}
              />
            </div>
              {
                this.state.errorData?<p className="error-msg">The required value cannot be empty</p>:null
              }
          </form>
        </div>
      </div>
    );
  }
}



const mapDispatchToProps=(dispatch)=>{
  console.log('fourth',dispatch);
  return{
    onAddMovie:(data)=>dispatch(addMovie(data))
  }
}

export default connect(null,mapDispatchToProps)(AddMovieForm);
