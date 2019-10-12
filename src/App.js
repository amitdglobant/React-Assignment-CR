import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/add-movie" component={AddMovieForm} />
          </Switch>
          <Switch>
            <Route exact path="/" movieList={this.props.movieList} component={MovieList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  movieList: state.todos
})


//export default App;
export default connect(
  mapStateToProps,
  null
)(App)