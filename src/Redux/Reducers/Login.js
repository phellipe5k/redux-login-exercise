import { LOGIN_USERNAME, LOGIN_PASSWORD } from "../Actions";

const GET_INITIAL_STATE = {
  username: '',
  password: ''
}

function reducer(state = GET_INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USERNAME:
      return [...state.username, action.value]
      break;
      
    case LOGIN_PASSWORD:
      return [...state.password, action.value]
      break;
    
    default:
      return state;
      break;
  }
}