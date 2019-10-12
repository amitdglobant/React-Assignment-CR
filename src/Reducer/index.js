export default (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE": {
      return { movies: action.movie };
    }
    default: {
      return state;
    }
  }
};
