let state = { friends:[] }
let action = {
  type: "ADD_FRIEND",
  friend: "Chrome Boi"
}

export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let newArray= [...state.friends, action.friend];
      return {friends: newArray }
    case 'REMOVE_FRIEND':
      let filteredArray = state.friends.filter(friend => {
        console.log(action)
        return friend.id!== action.id
      });
      return {friends: filteredArray}
    default:
      return state;
  }
}
