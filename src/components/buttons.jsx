import { incrementScoreAC, changeNameAC } from '../redux/actions'
import { connect } from 'react-redux'
// import { useEffect } from 'react'
import { requestData } from '../api/axios'
import randomWords from 'random-spanish-words'

const Buttons = (props) => {
  const { changeName, incrementScore, requestData, userName, userScore, userData } = props

  return (
    <div>
      <button onClick={changeName}>Change current name: {userName}</button>
      <button onClick={incrementScore}>Change current score: {userScore}</button>
      <button onClick={requestData}> Change current user status: {userData.title}</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userName: state.changeName.userName,
    userScore: state.incrementScore.userScore,
    userData: state.requestData.userData,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => dispatch(changeNameAC(randomWords(1))),
    incrementScore: () => dispatch(incrementScoreAC()),
    requestData: () => dispatch(requestData()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
