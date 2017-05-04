import { combineReducers } from 'redux'

const tasks = (state = [], action) => {
  return state
}

const taskReducer = combineReducers({
  tasks
})

export default taskReducer
