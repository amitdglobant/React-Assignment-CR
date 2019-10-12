import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";
import reducer from "./reducer";

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/add-movie" component={AddMovieForm} />
              <Route path="/" component={MovieList} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
