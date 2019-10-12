import React, { Component } from "react";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";
const data = React.createContext();
class MovieList extends Component {
  state={    
    movieList:[]
  };
  onSubmission=(getList)=>{
    var newList = [...getList];
    this.setState({movieList:newList})
  }

  componentDidMount(){
    console.log(this.props,this.state);
  }
  render() {
    // TODO:: The list shown should be sorted by ratings, in descending order
    // TODO:: If no data in movieList, show message - 'No movies found to display'
    const list =
      this.props.movieList &&
      this.props.movieList.map(movie => {
        return (
          <div className="movie">
            {/* TODO:: Convert this div into a link (website filled), 
          on click, the link should open in new tab
          */}
            <div>{movie.name}</div>
            <div>({movie.genre})</div>
            <div>
              <span className="fa fa-star" /> {movie.rating}/5
            </div>
          </div>
        );
      });
    return (
      <div>
        <FormHeader formTitle="Movie list" />
        <button
          className="add-movie-button"
          onClick={() => {
            // this.props.history.push("/add-movie");
            this.props.history.push({
              pathname: "/add-movie",
              state: this.state
            });

          }}
        >
          <i className="fa fa-plus" />
        </button>
        {/* Changes */}
        {/* {list} */}
        {list ? list : "No movies found to display"}
      </div>
    );
    
  }
}

export default MovieList;
