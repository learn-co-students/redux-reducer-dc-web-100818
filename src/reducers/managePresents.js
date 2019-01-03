//Actions only have a type attribute for this function
export function managePresents(state, action){
  switch(action.type){
    case "INCREASE":
      return { numberOfPresents: state.numberOfPresents + 1 }
    default:
      return state
  }
}
