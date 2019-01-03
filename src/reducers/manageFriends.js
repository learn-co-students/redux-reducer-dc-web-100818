export function manageFriends(state, action){

   switch(action.type) {
      case 'ADD_FRIEND':
         return Object.assign({}, state, state.friends.push(action.friend))
      case 'REMOVE_FRIEND':
         let newState = Object.assign({}, state)
         newState.friends = newState.friends.filter(friend => friend.id !== action.id)
         return newState
      default:
         return state
   }

}
