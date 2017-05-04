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

const taskReducer = combineReducers({
  tasks
})

export default taskReducer
