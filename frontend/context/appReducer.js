
export default (state, action) => {
  switch (action.type) {
    case 'FAKE_LOGIN':
      return {
        ...state,
        psy: action.payload.psy,
        appointments: action.payload.appointments,
        isLogged: true,
      }
    case 'FAKE_LOGOUT':
      return {
        ...action.payload
      }
    case 'CREATE_WEEKS':
      return {
        ...state,
        lastWeek: action.payload.lastWeek,
        thisWeek: action.payload.thisWeek,
        nextWeek: action.payload.nextWeek,
        actualWeek: action.payload.thisWeek,
      }
    case 'CHANGE_WEEK':
      return {
        ...state,
        actualWeek: action.payload,
      }
    case 'GET_THREE_WEEKS':
      return {
        ...state,
        appointments: action.payload,
      }
    default:
      return state
  }
}