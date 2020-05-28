  
import React, { useReducer } from 'react'
import appReducer from './appReducer';
import AppContext from './appContext';
import { loginUser } from '../../../store';

const AppState = props => {

  const inicialState = {
    psy: null,
    appointments: [],
    isLogged: false,
  }

  const [ state, dispatch ] = useReducer(appReducer, inicialState)

  // Functions or actions
  const fakeLogin = (user) => {
    const data = loginUser(user)
    console.log(data)
    dispatch({
      type: 'FAKE_LOGIN',
      payload: data
    })
  }

  const fakeLogout = () => {
    dispatch({
      type: 'FAKE_LOGOUT',
      payload: inicialState
    })
  }

  return (
    <AppContext.Provider
      value={{
        psy: state.psy,
        appointments: state.appointments,
        isLogged: state.isLogged,
        fakeLogin,
        fakeLogout
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState;