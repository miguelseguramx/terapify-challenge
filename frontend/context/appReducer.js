
export default (state, action) => {
  switch (action.type) {
    case 'FAKE_LOGIN':
      return {
        psy: action.payload.psy,
        appointments: action.payload.data,
        isLogged: true,
      }
    case 'FAKE_LOGOUT':
      return {
        ...action.payload
      }
    default:
      return state
  }
}