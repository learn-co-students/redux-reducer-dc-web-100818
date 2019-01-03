export function manageFriends(state={friends: []}, action){
  let newFriends
  
  switch(action.type) {
    case 'ADD_FRIEND':
      newFriends = [...state.friends, action.friend]
      return {friends: newFriends}
    case 'REMOVE_FRIEND':
      newFriends = state.friends.filter(friend => friend.id !== action.id)
      return {friends: newFriends}
    default:
      return state
  }
}
