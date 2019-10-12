// vendor
import React from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";
import MovieForm from "./MovieForm";

class AddMovieForm extends React.Component {
  render() {
    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />
        <button
          className="add-movie-button"
          onClick={() => {
            debugger;
            this.props.history.push("/");
          }}
        >
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
        </button>
        <div className="col-12 form-body">
          <MovieForm />
        </div>
      </div>
    );
  }
}

export default AddMovieForm;
