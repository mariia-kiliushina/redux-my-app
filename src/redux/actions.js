const CHANGE_NAME = 'change_name'
const INCREMENT_SCORE = 'increment_score'
const REQUEST_DATA = 'request_data'
const REQUEST_DATA_SUCESS = 'request_data_sucess'
const REQUEST_DATA_FAILURE = 'request_data_failure'

export const changeNameAC = (userName) => {
  return {
    type: CHANGE_NAME,
    payload: {
      userName,
    },
  }
}
export const incrementScoreAC = () => {
  return {
    type: INCREMENT_SCORE,
  }
}

export const requestDataAC = () => {
  return {
    type: REQUEST_DATA,
  }
}
export const requestDataSucessAC = (userData) => {
  return {
    type: REQUEST_DATA_SUCESS,
    payload: userData,
  }
}
export const requestDataFailureAC = (error) => {
  return {
    type: REQUEST_DATA_FAILURE,
    payload: error,
  }
}
