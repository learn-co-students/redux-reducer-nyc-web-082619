export function manageFriends(state, action){
    switch(action.type){
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            let foundIndex = state.friends.findIndex(friend => friend.id === action.id)
            let updatedFriends = [...state.friends]
            updatedFriends.splice(foundIndex, 1)
            return {friends: updatedFriends}
        default: 
            return {...state}
    }
}
