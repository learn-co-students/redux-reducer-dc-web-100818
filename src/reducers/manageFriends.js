export function manageFriends(state = {}, action){
  if (action.type === "ADD_FRIEND") {
    return {...state, friends:[...state.friends, action.friend]}
  } else if (action.type === "REMOVE_FRIEND") {
    let newStateObjectFriends = state.friends.filter(friendObject => friendObject.id != action.id)
    return {...state, friends:[...newStateObjectFriends]}
  }
  else {
    return state
  }
}
