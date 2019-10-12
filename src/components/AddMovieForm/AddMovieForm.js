// vendor
import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, FormGroup, Input, Card, CardBody, Col } from 'reactstrap';
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";
import * as MovieActionCreator from '../../actions/MovieActionCreator';

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName : "",
      genre     : "Science Fiction",
      rating    : "1",
      website   : "",
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFormSubmit  = this.handleFormSubmit.bind(this);
  }

  handleFieldChange(e) {
    this.setState({
      movieName : e.target.name === "MovieName" ? e.target.value : this.state.movieName,
      genre     : e.target.name === "Genre" ? e.target.value : this.state.genre,
      rating    : e.target.name === "rating" ? e.target.value : this.state.rating,
      website   : e.target.name === "Website" ? e.target.value : this.state.website,
    })
  }

  handleFormSubmit() {
    const movie = {
      movieName : this.state.movieName,
      genre     : this.state.genre,
      rating    : this.state.rating,
      website   : this.state.website,
    };
    this.props.moviesActions.addMovie(movie);
    this.props.history.push("/");
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
        <Card className="col-md-12 col-sm-12 form-body">
        <CardBody>
          <Form>
            <FormGroup className="wrapper">
              <Col md="4" sm="6">
                <label className="label" htmlFor="MovieName">
                  Movie Name*
                </label>
              </Col>
              <Col md="4" sm="6">
                <Input id="MovieName" name="MovieName" type="text" onChange={this.handleFieldChange}/>
              </Col>
            </FormGroup>
            <FormGroup className="wrapper">
              <Col md="4" sm="6">
                <label className="label" id="Genre" htmlFor="Genre">
                  Genre*
                </label>
              </Col>
              <Col md="4" sm="6">
                <Input type="select" name="Genre" onChange={this.handleFieldChange}>
                  <option value="Science Fiction">Science Fiction</option>
                  <option value="Drama">Drama</option>
                  <option value="Action">Action</option>
                  <option value="Horror">Horror</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Others">Others</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup className="wrapper">
              <Col md="4" sm="6">
                <label className="label" htmlFor="rating">
                  Rating*
                </label>
               </Col>
               <Col md="4" sm="6">
                <input type="radio" name="rating" value="1" label="1" onChange={this.handleFieldChange}/>1
                <input type="radio" name="rating" value="2" onChange={this.handleFieldChange}/>2
                <input type="radio" name="rating" value="3" onChange={this.handleFieldChange}/>3
                <input type="radio" name="rating" value="4" onChange={this.handleFieldChange}/>4
                <input type="radio" name="rating" value="5" onChange={this.handleFieldChange}/>5
               </Col>
            </FormGroup>
            <FormGroup className="wrapper">
              <Col md="4" sm="6">
                <label className="label" htmlFor="Website">
                  Website
                </label>
               </Col>
               <Col md="4" sm="6">
                <Input id="Website" name="Website" onChange={this.handleFieldChange}/>
               </Col>
            </FormGroup>
            <FormGroup className="wrapper submit-btn">
            <Col md="4" sm="4">
            </Col>
            <Col md="4" sm="4">
              <Button
                id="Submit"
                name="Submit"
                type="button"
                onClick={this.handleFormSubmit}
              >
                Submit
              </Button>
            </Col>
            <Col md="4" sm="4">
            </Col>
            </FormGroup>
          </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    moviesActions : bindActionCreators(MovieActionCreator, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(AddMovieForm);
