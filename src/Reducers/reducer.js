const initialState = {
    movieArray:[]
}


const reducer = (state=initialState,action)=>{
    switch(action.type){
      case 'Add':
      return {
          ...state,
          movieArray: [...state.movieArray,action.value]
      }
      default:
      return state
    }
}

export default reducer;
