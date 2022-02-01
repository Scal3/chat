// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
    case 'JOINED' :
      return {
        ...state,
        joined: true,
        room: action.payload.room,
        userName: action.payload.userName
      }

    case 'SET_USERS' :
      return {
        ...state,
        users: action.payload
      }

    case 'SET_MESSAGES' :
      return {
        ...state,
        messages: action.payload
      }
    default:
      return state
  }

}