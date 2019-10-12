// vendor
import React from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";
import {Link} from "react-router-dom";
import appdata from "../../AppData";

class AddMovieForm extends React.Component {
  constructor(props){
    super(props);
    this.state={data:{
      MovieName:"",
      Genre:"Science Fiction",
      rating:null,
      Website:""
    },
    isSubmitEnable:false
    }
    this.HandleChange=this.HandleChange.bind(this);
    this.HandleSubmit=this.HandleSubmit.bind(this);
    this.UpdateSubmitStatus=this.UpdateSubmitStatus.bind(this);
  }
  HandleChange(e){
    var field = e.target.name;
    var value = e.target.value;
    if(field==="MovieName"){
      if(/^[A-Za-z]+$/.test(value)){
        var temp=this.state.data;
        temp[field] = value;
        this.setState({ data: temp });
        this.UpdateSubmitStatus();
      }
      
    }
    
    else{
        var temp=this.state.data;
        temp[field] = value;
        this.setState({ data: temp });
        this.UpdateSubmitStatus();
    }
    
  }
  HandleSubmit(){
      var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      var regex = new RegExp(expression);
      if(this.state.data.Website){
        if(regex.test(this.state.data.Website)){
          appdata.setdata(this.state.data);
        }
        else{
          alert("Please enter a valid url");
        }
      }
      else{
        appdata.setdata(this.state.data);
      }
      
    }
  
  UpdateSubmitStatus(){
    if(this.state.data.MovieName && this.state.data.Genre && this.state.data.rating){
      this.setState({isSubmitEnable:true})
    }
  }
  render() {
    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />
        <Link to="/">
        <button
          className="add-movie-button"
          onClick={() => {

          }}
        >
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
        </button></Link>
        <div className="col-12 form-body">
          <form action="#">
            <div className="wrapper">
              <label className="label" htmlFor="MovieName">
                Movie Name*
              </label>
              <input id="MovieName" name="MovieName" type="text" tabIndex="1" value={this.state.data.MovieName} onChange={this.HandleChange}/>
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select name="Genre" value={this.state.data.Genre} onChange={this.HandleChange}>
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
              <input type="radio" name="rating" value="1" label="1" checked={this.state.data.rating==="1"} onChange={this.HandleChange}/>1
              <input type="radio" name="rating" value="2" checked={this.state.data.rating==="2"} onChange={this.HandleChange}/>2
              <input type="radio" name="rating" value="3" checked={this.state.data.rating==="3"} onChange={this.HandleChange}/>3
              <input type="radio" name="rating" value="4" checked={this.state.data.rating==="4"} onChange={this.HandleChange}/>4
              <input type="radio" name="rating" value="5" checked={this.state.data.rating==="5"} onChange={this.HandleChange}/>5
            </div>
            <div className="wrapper">
              <label className="label" htmlFor="Website">
                Website
              </label>
              <input id="Website" name="Website"  value={this.state.data.Website} onChange={this.HandleChange}/>
            </div>
            
          </form>
          {this.state.isSubmitEnable?<Link to="/">
          <div className="wrapper submit-btn">
              <input
                id="Submit"
                name="Submit"
                type="submit"
                value="Submit"
                tabIndex="5" 
                onClick={this.HandleSubmit} disabled={!this.state.isSubmitEnable}
              />
            </div></Link>:
          <div className="wrapper submit-btn">
              <input
                id="Submit"
                name="Submit"
                type="submit"
                value="Submit"
                tabIndex="5" 
                onClick={this.HandleSubmit} disabled={!this.state.isSubmitEnable}
              />
            </div>}
          
        </div>
      </div>
    );
  }
}

export default AddMovieForm;
