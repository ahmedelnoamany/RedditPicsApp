
export function setUsername(userName) {
  return {
    type: 'SET_USERNAME',
    payload: userName,
  }
}

export function setPassword(password) {
  return {
    type: 'SET_PASSWORD',
    payload: password,
  }
}
