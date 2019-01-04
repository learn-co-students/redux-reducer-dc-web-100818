export function manageFriends(state, action){

  let newFriends = [...state.friends, action.friend]
  let oldFriends = state.friends.filter(friend => friend.id !== action.id)
  switch(action.type){
    case "ADD_FRIEND":
      return {friends: newFriends};
    case "REMOVE_FRIEND":
      return {friends: oldFriends}
    default:
      return state
      }
  }


// action = {
//   type: "ADD_FRIEND",
//   friend: "Chrome Boi"
// }
// let state = {
//   friends: [
//     {
//       name: 'Avi',
//       hometown: 'NYC',
//       id: 100
//     }
//   ],
// };

//
// case "INCREASE":
//   return {numberOfPresents: state.numberOfPresents + 1};
// default:
//   return state;
// }
// }
