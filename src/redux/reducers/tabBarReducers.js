export default function reducer(state={
  selected: null,
}, action){
  switch(action.type) {
    case "TAB_POSTS": {
      return {
        ...state,
        selected: action.payload,

      }
    }
    case "TAB_USERS": {
      return {
        ...state,
        selected: action.payload,

      }
    }
    case "TAB_SETTINGS": {
      return {
        ...state,
        selected: action.payload,
      }
    }
    default: {
      return state
    }
  }
  return state
}
