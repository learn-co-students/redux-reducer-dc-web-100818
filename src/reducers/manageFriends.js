export function manageFriends(state, action){
  switch (action.type){
    case "ADD_FRIEND":
      return {friends: [...state.friends,action.friend]}
    case "REMOVE_FRIEND":
      let jj = state.friends.filter((f)=> f.id !== action.id)
    
      return {friends: jj}
    default:
      return state;
    }
}
