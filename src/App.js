import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/add-movie"
              render={({ history }) => <AddMovieForm />}
            ></Route>
            <Route exact path="/" component={MovieList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
