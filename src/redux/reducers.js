const CHANGE_NAME = 'change_name'
const INCREMENT_SCORE = 'increment_score'
const REQUEST_DATA = 'request_data'
const REQUEST_DATA_SUCESS = 'request_data_sucess'
const REQUEST_DATA_FAILURE = 'request_data_failure'

export const initialStateN = {
  userName: '',
}
export const initialStateS = {
  userScore: 0,
}
export const initialStateD = {
  userData: {},
  loading: false,
  error: '',
}

export const changeNameReducer = (state = initialStateN, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, userName: action.payload.userName }
    default:
      return state
  }
}
export const incrementScoreReducer = (state = initialStateS, action) => {
  switch (action.type) {
    case INCREMENT_SCORE:
      return { ...state, userScore: state.userScore + 1 }
    default:
      return state
  }
}
export const requestDataReducer = (state = initialStateD, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, loading: true }
    case REQUEST_DATA_SUCESS:
      return { ...state, loading: false, userData: action.payload }
    case REQUEST_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
