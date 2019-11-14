export function manageFriends(state={friends: []}, action){
  if(action.type === "ADD_FRIEND")
    return {friends: [...state.friends, action.friend]}
  if(action.type === "REMOVE_FRIEND")
    return {friends: state.friends.filter(friend => friend.id !== action.id)}
  else 
    return state;
}
