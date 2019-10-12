import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";
import { browserHistory } from 'react-router';
class App extends React.Component {

  
  render() {

    let movieList = localStorage.getItem('movieList')
    let history =this.props;
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/add-movie" component={AddMovieForm} />
          </Switch>
          <Switch>
            <Route exact path="/"  component={MovieList}
            // component={() => <MovieList movieList={movieList} history={browserHistory}/>} 
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
