import axios from 'axios'

import { requestDataAC, requestDataSucessAC, requestDataFailureAC } from '../redux/actions'

export const requestData = () => (dispatch) => {
  const id = Math.floor(Math.random() * 100)

  dispatch(requestDataAC())
  axios
    .get('https://jsonplaceholder.typicode.com/todos/' + id)
    .then((response) => dispatch(requestDataSucessAC(response.data)))
    .catch((error) => dispatch(requestDataFailureAC()))
}
