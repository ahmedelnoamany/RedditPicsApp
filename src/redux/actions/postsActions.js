export function getPosts(){
return function(dispatch, getState) {
  fetch('https://www.reddit.com/r/footballhighlights/top/.json?sort=top&t=all&limit=100',{
    Accept: 'application/json'
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData)
      dispatch(myActions.setPosts(responseData.data.children))
    })
    .catch((err) => {
      console.log(err)
      dispatch(myActions.setError(err))
    })
  }
}

export function setPosts(data){
  return {
    type: "FETCH_POSTS_COMPLETE",
    payload: data
  }
}

export function setError(err){
  return {
    type: "FETCH_POSTS_ERROR",
    payload: err
  }
}
