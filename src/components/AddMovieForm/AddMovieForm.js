// vendor
import React from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";

class AddMovieForm extends React.Component {
  constructor(){
    super();
    this.state = {movieList: [],
                  currentList:[]
                };   
  }
    

      handleMovieNameChange = (e)=>{
        const li = {...this.state.currentList,name:e.target.value};

      this.setState({currentList: li });
    
      }
      handleGenreChange = (e)=>{    
        const li = {...this.state.currentList,genre:e.target.value};
        this.setState({currentList: li });
     
      }
      handleWebsiteChange = (e)=>{     
        const li = {...this.state.currentList,Web:e.target.value};
        this.setState({currentList: li });
      }
      
      handleSubmit = (event) =>{      
        const newn = [...this.state.movieList, ...this.state.currentList];
        this.setState({movieList:newn});       
        alert(JSON.stringify(this.state.movieList));    
        event.preventDefault();
     }




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
        <div className="col-12 form-body">
          <form>
            <div className="wrapper">
              <label className="label" htmlFor="MovieName">
                Movie Name*
              </label>
              <input id="MovieName" name="MovieName" type="text" tabIndex="1"  onChange={this.handleMovieNameChange}/>
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select name="Genre" onChange={this.handleGenreChange}>
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
              <input id="Website" name="Website" onChange={this.handleWebsiteChange}/>
            </div>
           
            <div className="wrapper submit-btn">
              <button
                id="Submit"
                name="Submit"           
                tabIndex="5"  onClick={this.handleSubmit}         
              >sumbit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMovieForm;
