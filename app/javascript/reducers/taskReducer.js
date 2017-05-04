import { combineReducers } from 'redux'

const tasks = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_TASK':
    return Object.assign([], state, action.tasks)
  default:
    return state
  }
}

const taskReducer = combineReducers({
  tasks
})

export default taskReducer
