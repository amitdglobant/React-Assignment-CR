const moviesList = [];
const movies = (state = moviesList, action) => {
  const { movie } = action;
  switch (action.type) {
    case "ADD_MOVIE":
      return [...state, movie];

    default:
      return state;
  }
};

export default movies;
