import React, { Component } from "react";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";
import appdata from "../../AppData";
class MovieList extends Component {
  constructor(props){
    super(props);
    this.state={
      movieList:[]
    }
  }
  componentDidMount(){
    this.setState({movieList:appdata.getData()})
  }
  render() {
    // TODO:: The list shown should be sorted by ratings, in descending order
    // TODO:: If no data in movieList, show message - 'No movies found to display'
    var list;
      if(this.state.movieList.length>0){
        var sortedList=this.state.movieList.sort((a,b)=>{
          return a.rating-b.rating;
        })
      list = sortedList.map(movie => {
        return (
          <div className="movie">
            {/* TODO:: Convert this div into a link (website filled), 
          on click, the link should open in new tab
          */}
            <div>{movie.MovieName}</div>
            <div>({movie.Genre})</div>
            <div>
              <span className="fa fa-star" /> {movie.rating}/5
            </div>
            <a href={movie.Website}>{movie.Website}</a>
          </div>
        );
      })}
      else{
        list=<div>No Movie Available. Please add some</div>;
      } 
    return (
      <div>
        <FormHeader formTitle="Movie list" />
        <button
          className="add-movie-button"
          onClick={() => {
            this.props.history.push("/add-movie");
          }}
        >
          <i className="fa fa-plus" />
        </button>
        {list}
      </div>
    );
  }
}

export default MovieList;
