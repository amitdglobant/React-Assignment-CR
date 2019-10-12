import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";
import MovieListView from "./components/MovieList/MovieListView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movielist: [] };
   }
  onAddMovie= (val) => {
    console.log("onAddMovieapp",val);
    let movies=this.state.movielist;
    movies.push(val);
    this.setState({movielist:movies});
    console.log("movielist",movies);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/add-movie" component={()=><AddMovieForm onAddMovie={this.onAddMovie}/>} />
          </Switch>
          <Switch>
            <Route exact path="/" component={MovieList} />
          </Switch>
          <Switch>
            <Route exact path="/movie-list" component={()=><MovieListView movieList={this.state.movielist}/>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
