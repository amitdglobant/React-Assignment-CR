import React, { Component } from "react";

import FormHeader from "../FormHeader/FormHeader";
import{connect} from 'react-redux';
import "./MovieList.css";

class MovieList extends Component {
  constructor(props){
    super(props);
    this.data = this.props.location.state;
  }
  render() {
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
        {this.props.movieArray.length?
          <div className="movie-list">
            {this.props.movieArray.map((item,i)=>{
              return(
                <div>
                  <p>{item.MovieName}</p>
                  <p>({item.genre})</p>
                  <p><span className="fa fa-star"></span>{item.rating}/5</p>
                  <p>{item.Website}</p>
                </div>
              )
            })}
            </div> :
          <div className="no-movie-list">No Movie List Found</div>
        }
      </div>
    );
  }
}

const mapStateToProps=(state) => ({
    movieArray : state.movieArray
});


export default connect(mapStateToProps)(MovieList);
