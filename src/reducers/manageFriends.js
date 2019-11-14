export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      const id = state.friends.findIndex(ele => ele.id === action.id);
      const updatedState = [...state.friends];
      updatedState.splice(id, 1);
      return { friends: updatedState };
    default:
      return { ...state };
  }
}
