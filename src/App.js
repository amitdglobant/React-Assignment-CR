import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";

export const getMovielist = React.createContext();
export const addMovies = React.createContext();

class App extends React.Component {
  state = {
    movieCollection: []
  };

  addMoviesToCoolection = (newMovies) => {
    //Adds movie to movie collection
    const newCollection = [...this.state.movieCollection, newMovies]
    this.setState(this.state.movieCollection = newCollection);
  }

  render() {
    //sort movies in descending order
    this.state.movieCollection.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    })
    return (
      <getMovielist.Provider value={this.state.movieCollection} >
        <addMovies.Provider value={this.addMoviesToCoolection}>
          <Router>
            <div className="App">
              <Switch>
                <Route exact path="/add-movie" component={AddMovieForm} />
              </Switch>
              <Switch>
                <Route exact path="/" component={MovieList} />
              </Switch>
            </div>
          </Router>
        </addMovies.Provider>
      </getMovielist.Provider>
    );
  }
}

export default App;
