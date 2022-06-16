import { incrementScoreAC, changeNameAC } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { requestData } from '../api/axios'
import { useEffect } from 'react'
import randomWords from 'random-spanish-words'

const HooksButtons = (props) => {
  const dispatch = useDispatch()

  useEffect(() => dispatch(requestData()))

  const userName = useSelector((state) => state.changeName.userName)
  const userScore = useSelector((state) => state.incrementScore.userScore)
  const userData = useSelector((state) => state.requestData.userData)

  let randomName = randomWords(1)

  return (
    <div>
      <button onClick={() => dispatch(changeNameAC(randomName))}>
        Change current name: {userName}
      </button>
      <button onClick={() => dispatch(incrementScoreAC())}>
        Change current score: {userScore}
      </button>
      <button onClick={() => dispatch(requestData())}>
        Change current user status: {userData.title}
      </button>
    </div>
  )
}

export default HooksButtons
