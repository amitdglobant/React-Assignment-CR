import { ADD_MOVIE } from "./constants";

const initialState = {
  listOfMovies: []
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_MOVIE:
      const stateClone = { ...state };
      stateClone.listOfMovies.push(action.data);
      return stateClone;

    default:
      return state;
  }
};
