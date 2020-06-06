const INITIAL_STATE = {
  displayConfirmation: false
}

export default (state = INITIAL_STATE, action) => {
  if (action.type === `DISPLAY_CONTACT_CONFIRMATION`) {
    return { ...state, displayConfirmation: true }
  }

  if (action.type === `HIDE_CONTACT_CONFIRMATION`) {
    return { ...state, displayConfirmation: false }
  }

  return state
}