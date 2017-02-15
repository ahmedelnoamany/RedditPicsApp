export default function reducer(state={
  user: {
    id: null,
    userName: null,
    password: null,
  },

}, action){
  switch(action.type) {
    case "SET_USERNAME": {
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.payload,
        },
        
      }
    }
    case "SET_PASSWORD": {
      return {
        ...state,
        user: {
          ...state.user,
          password: action.payload
        },

      }
    }
    default: {
      return {

      }
    }
    return state
  }
}
