import React, { useReducer } from 'react'
import appReducer from './appReducer';
import AppContext from './appContext';

const AppState = props => {

  const inicialState = {
    psy: null,
    appointments: [],
    isLogged: false,
  }

  const [ state, dispatch ] = useReducer(appReducer, inicialState)

  
  // Functions or actions
  const fakeLogin = async (user) => {
    const URL = `http://localhost:3001/api/appointment?psy=${user}`
    const res = await fetch(URL)
    const data = await res.json()
    const payload = {
      psy: user,
      appointments: data.body
    }
    console.log(data)
    dispatch({
      type: 'FAKE_LOGIN',
      payload,
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