import { 
  SET_USERS, 
  ADD_MESSAGE, 
  ROOM_JOIN, 
  SET_DATA
} from '../actions/types'

const initialState = {
  joined: false,
  room: null,
  userName: null,
  users: [],
  messages: []
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case ROOM_JOIN: {
      const { room, userName } = payload

      return {
        ...state,
        joined: true,
        room: room,
        userName: userName,
      }
    }
      
    case SET_USERS: {
      const { users } = payload

      return {
        ...state,
        users
      }
    }

    case SET_DATA: {
      const { users, messages } = payload

      return {
        ...state,
        users,
        messages
      }
    }
      
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, payload]
      }
    }

    default: {
      return state
    }
  }
}

export default rootReducer