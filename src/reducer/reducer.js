import { Map } from 'immutable';
const initialState = Map({
  movies : Map({}),
});

const reducer = (state = initialState, action) => {
  if(action.type === 'ADD_MOVIE') {
    console.log(action.movie)
    const oldMovie  = state.get('movies');
    const index     = Math.floor(Math.random() * 100);
    const newMovies = oldMovie.set(index, Map({...action.movie, index}));
    return state.set('movies', newMovies);
  }
  return state;
};

export default reducer;