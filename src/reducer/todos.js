const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            movieName: action.movieName,
            genre: action.genre,
            rating: action.rating,
            site: action.site
          }
        ]
      default:
        return state
    }
  }
  
  export default todos