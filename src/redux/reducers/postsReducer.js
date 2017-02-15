export default function reducer(state={
  posts: [],
  error: null,

}, action){
  switch(action.type) {
    case "FETCH_POSTS_COMPLETE": {
      return {
        ...state,
        posts: action.payload,

      }
    }
    case "FETCH_POSTS_ERROR": {
      return {
        ...state,
        error: action.payload,

      }
    }
  }
  return state
}
