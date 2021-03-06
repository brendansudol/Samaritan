export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const ADD_CREDIT_CARD = 'ADD_CREDIT_CARD'

export const requestLogin = () => ({ type: LOGIN_REQUEST })
export const completeLogin = user => ({ type: LOGIN_SUCCESS, user })
export const failLogin = error => ({ type: LOGIN_FAILURE, error })
export const logout = () => ({ type: LOGOUT_SUCCESS })

export const addCreditCard = () => ({ type: ADD_CREDIT_CARD })

export const attemptLogin = (user, pw) => dispatch => {
  dispatch(requestLogin())
  console.log(`user: ${user} pw: ${pw}`)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch(completeLogin({ id: 1 }))
      resolve()
    }, 500)
  })
}
