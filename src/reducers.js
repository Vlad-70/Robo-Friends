import { CHANGE_SEARCH_FIELD } from './constans'

const initialState = {
  searchfield: ''
}

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      //Or   return { ...state, {searchField: action.payload}};
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state;
  }
}
