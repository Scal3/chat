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
    default:
      return state
  }

}