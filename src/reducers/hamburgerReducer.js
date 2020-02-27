const INITIAL_STATE = {
    isMobileNavOpen: false
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === `TOGGLE_MOBILE_NAV`) {
        return { ...state, isMobileNavOpen: !state.isMobileNavOpen }
    }

    return state
  }