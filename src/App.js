import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: []
    }
  }
  
  handleSubmit = (value) => {
    this.setState(state => {
      const movieList = state.movieList.push(value)
      return movieList
    })
  }
  render() {
    const ml = this.state.movieList
    console.log(ml)
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/add-movie" component={() => ( < AddMovieForm  onSubmit={this.handleSubmit}/> ) } />
          </Switch>
          <Switch>
            <Route exact path="/" component={() => (<MovieList movieList={ml}/>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
