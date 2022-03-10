import { SET_USERS, ADD_MESSAGE, ROOM_JOIN, SET_DATA } from './types'
import axios from 'axios';
import socket from '../utils/socket';


export const setUsers = users => ({ type: SET_USERS, payload: { users } })

export const addMessage = message => ({ type: ADD_MESSAGE, payload: message })

export const roomJoin = userData => ({ type: ROOM_JOIN, payload: userData })

export const setData = data => ({ type: SET_DATA, payload: data }) // data.roomData

export const onLogin = userData => async (dispatch, getState) => {
  dispatch(roomJoin(userData))
  console.log(userData)
  socket.emit('ROOM:JOIN', userData)
  const { data } = await axios.get(`/rooms/${userData.room}`)// try/catch
  dispatch(setData(data.roomData))
}
