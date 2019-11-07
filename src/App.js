import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/add-movie" component={AddMovieForm} />
              <Route exact path="/" component={MovieList} />} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
