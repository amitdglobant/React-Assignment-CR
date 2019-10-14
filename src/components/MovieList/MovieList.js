import React, { useContext } from "react";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";
import { getMovielist } from "../../App";

var list = [];
const MovieList = (props) => {
  console.log(props);
  const data = useContext(getMovielist);

  list = data && data.length > 0
    ? data.map(movie =>
      < div className="movie" key={movie.name + Math.random()}>

        < div > <a href={movie && movie.website} target="_blank">{movie.name}</a></div>
        <div>({movie.genre})</div>
        <div>
          <span className="fa fa-star" /> {movie.rating}/5
         </div>
      </div >)
    : <h1>{"No movies found to display"}</h1>;



  return (
    <div>
      <FormHeader formTitle="Movie list" />
      <button
        className="add-movie-button"
        onClick={() => {
          props.history.push("/add-movie");
        }}
      >
        <i className="fa fa-plus" />
      </button>
      {list}
    </div>
  );


}

export default MovieList;
