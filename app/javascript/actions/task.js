export const fetchTask = (tasks) => ({
  type: 'FETCH_TASK',
  tasks
})

export const addTask = (title) => ({
  type: 'ADD_TASK',
  title
})

export const setAuthenticityToken = (token) => ({
  type: 'SET_AUTHENTICITY_TOKEN',
  token
})

export const setTaskSetId = (id) => ({
  type: 'SET_TASK_SET_ID',
  id
})

export const postTask = (title) => (dispatch, getState) => {
  var headers = new Headers()
  headers.append("Content-Type", "application/json")
  headers.append("Accept", "application/json")
  headers.append("X-CSRF-Token", getState().authenticityToken.token)
  return fetch("/tasks", {
    method: "POST",
    credentials: 'same-origin',
    headers: headers,
    body: JSON.stringify({
      task: {
        title: title,
        task_set_id: getState().taskSet.id
      }
    })
  }).then(response => {
    if (response.status == 204) {
      dispatch(addTask(title))
    } else {
      console.log(response)
    }
  })
}
