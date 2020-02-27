const INITIAL_STATE = {
    count: 8
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === `INCREMENT`) {
        return { ...state, count: action.countValue }
    }

    return state
  }