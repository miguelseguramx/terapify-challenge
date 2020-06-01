import React, { useReducer } from 'react'
import appReducer from './appReducer';
import AppContext from './appContext';
// import data from '../../../data2';
import moment from 'moment';

const AppState = props => {

  // const inicialState = {
  //   psy: 2,
  //   appointments: data,
  //   isLogged: true,
  //   lastWeek: [17, 18, 19, 20, 21, 22, 23],
  //   thisWeek: [24, 25, 26, 27, 28, 29, 30],
  //   nextWeek: [31, 1, 2, 3, 4, 5, 6],
  //   actualWeek: [24, 25, 26, 27, 28, 29, 30],
  // }
  const inicialState = {
    psy: null,
    appointments: [],
    isLogged: false,
    lastWeek: [],
    thisWeek: [],
    nextWeek: [],
    actualWeek: [],
  }

  const [ state, dispatch ] = useReducer(appReducer, inicialState)
  
  const BASEURL =  process.env.NEXT_PUBLIC_BASEURL
  
  // Functions or actions
  const fakeLogin = async (user) => {
    const URL = `${BASEURL}/api/appointment?psy=${user}&startDate=2020-05-24&endDate=2020-05-31`
    const res = await fetch(URL)
    const data = await res.json()
    const payload = {
      psy: user,
      appointments: data.body
    }
    
    dispatch({
      type: 'FAKE_LOGIN',
      payload,
    })
  }
  
  const getThreeWeeks = async (user) => {
    const URL = `${BASEURL}/api/appointment?psy=${user}&startDate=2020-05-17&endDate=2020-06-07`
    const res = await fetch(URL)
    const data = await res.json()
    dispatch({
      type: 'GET_THREE_WEEKS',
      payload: data.body
    })
    createWeeks()
  }

  const createWeeks = () => {
    const dates = []

    // We dont want the actual week, we just have three weeks of data
    // for(let i = -7; i < 14; i++){
    //   dates.push(moment().day(i).date())
    // }

    // const payload = {
    //   lastWeek: dates.slice(0,7),
    //   thisWeek: dates.slice(7,14),
    //   nextWeek: dates.slice(14)
    // };
    const payload = {
      lastWeek: [17, 18, 19, 20, 21, 22, 23],
      thisWeek: [24, 25, 26, 27, 28, 29, 30],
      nextWeek: [31, 1, 2, 3, 4, 5, 6],
    };

    dispatch({
      type: 'CREATE_WEEKS',
      payload,
    })
  }

  const changeWeek = (newWeek) => {
    dispatch({
      type: 'CHANGE_WEEK',
      payload: newWeek
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
        lastWeek: state.lastWeek,
        thisWeek: state.thisWeek,
        nextWeek: state.nextWeek,
        actualWeek: state.actualWeek,
        fakeLogin,
        fakeLogout,
        changeWeek,
        getThreeWeeks,
        createWeeks,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState;