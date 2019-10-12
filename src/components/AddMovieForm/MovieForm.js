import React, { Component } from 'react'

export default class MovieForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieName: '',
            genre: 'Science Fiction',
            rating: 0,
            website: '',
            valid: false,
            movieNameValidation: ''
        }
    }

    onChangeHandler = (name, e) => {
        let { movieName, genre, rating, website, movieNameValidation, genreValidation,
            ratingValidation, websiteValidation } = this.state;
        switch (name) {
            case 'MovieName':
                movieName = e.target.value;
                break;
            case 'Genre':
                genre = e.target.value;
                break;
            case 'rating':
                rating = e.target.value;
                break;
        }

        let validdationObject = this.validation(movieName, genre, rating, website);
        this.setState({ movieName, genre, rating, website, valid: validdationObject.valid, movieNameValidation: validdationObject.movieNameValidation });
    }

    validation(movieName, genre, rating, website) {
        let movieNameValidation = '';
        if (movieName !== '') {
            var matches = movieName.match(/\d+/g);
            if (matches != null) {
                movieNameValidation = 'movie name should not contains a number!';
                return { valid: false, movieNameValidation };
            }
        }
        if (movieName === '') {
            return { valid: false, movieNameValidation };
        } else if (genre === '') {
            return { valid: false, movieNameValidation };
        } else if (rating === 0) {
            return { valid: false, movieNameValidation };
        }

        return { valid: true, movieNameValidation };
    }

    submitForm = () => {
        let movie = {};
        movie.name =  this.state.movieName;
        movie.genre =  this.state.genre;
        movie.rating =  this.state.rating;
        movie.name =  this.state.website;
        let movieList = localStorage.getItem('movieList');
        if(movieList === "null"){
            movieList = [];
        }
        movieList.push(movie);
        localStorage.setItem('movieList', movieList);
    }

    render() {
        const { movieName, genre, rating, website, valid } = this.state;
        console.log('list:', localStorage.getItem('movieList'))

        return (
            <form>
                <div className="wrapper">
                    <label className="label" htmlFor="MovieName">
                        Movie Name*
              </label>
                    <input id="MovieName" name="MovieName" type="text"
                        value={this.state.value}
                        tabIndex="1"
                        onChange={(e) => { this.onChangeHandler('MovieName', e) }}
                    />
                    <br />
                    <label className="label" htmlFor="MovieName">
                        {this.state.movieNameValidation}
                    </label>
                </div>
                <div className="wrapper">
                    <label className="label" id="Genre" htmlFor="Genre">
                        Genre*
              </label>
                    <select name="Genre" value={this.state.genre} onChange={(e) => this.onChangeHandler('Genre', e)}>
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
                    <input type="radio" name="rating" value="1" label="1" onChange={(e) => this.onChangeHandler('rating', e)} />1
              <input type="radio" name="rating" value="2" onChange={(e) => this.onChangeHandler('rating', e)} />2
              <input type="radio" name="rating" value="3" onChange={(e) => this.onChangeHandler('rating', e)} />3
              <input type="radio" name="rating" value="4" onChange={(e) => this.onChangeHandler('rating', e)} />4
              <input type="radio" name="rating" value="5" onChange={(e) => this.onChangeHandler('rating', e)} />5
            </div>
                <div className="wrapper">
                    <label className="label" htmlFor="Website">
                        Website
              </label>
                    <input id="Website" value={this.state.website} name="Website"
                        onChange={(e) => { this.onChangeHandler('Website', e) }} />
                </div>
                <div className="wrapper submit-btn">
                    <input
                        id="Submit"
                        name="Submit"
                        type="submit"
                        value="Submit"
                        tabIndex="5"
                        disabled={valid ? false : true}
                        onClick={()=>this.submitForm()}
                    />
                </div>
            </form>
        )
    }
}
