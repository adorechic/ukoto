import { combineReducers } from 'redux'

const tasks = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_TASK':
    return Object.assign([], state, action.tasks)
  case 'ADD_TASK':
    return [
      {
        title: action.title
      },
      ...state
    ]
  default:
    return state
  }
}

const authenticityToken = (state = {}, action) => {
  switch (action.type) {
  case 'SET_AUTHENTICITY_TOKEN':
    return Object.assign({}, state, { token: action.token })
  default:
    return state
  }
}

const taskSet = (state = '', action) => {
  switch (action.type) {
  case 'SET_TASK_SET_ID':
    return Object.assign({}, state, { id: action.id })
  default:
    return state
  }
}

const taskReducer = combineReducers({
  tasks,
  authenticityToken,
  taskSet
})

export default taskReducer
