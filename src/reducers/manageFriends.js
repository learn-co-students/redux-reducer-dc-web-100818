//Actions for this function have two attributes, type and friend
export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      state.friends.push(action.friend)
      return { friends: state.friends };
    case 'REMOVE_FRIEND':
      let newFriends = state.friends.filter(f => f.id !== action.id)
      return { friends: newFriends };
    default:
      return state;
  }
}
