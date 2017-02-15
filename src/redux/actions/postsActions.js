
export function fetchJson() {
  return function(dispatch) {
    fetch('https://www.reddit.com/r/footballhighlights/top/.json?sort=top&t=all&limit=100',{
      Accept: 'application/json'
      })
      .then((response) => {
        dispatch({type: "FETCH_POSTS_COMPLETE", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POSTS_ERROR", payload: err})
      })
    }
  }
