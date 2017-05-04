import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import TaskApp from './TaskApp'
import taskReducer from '../reducers/taskReducer'
import { fetchTask, setAuthenticityToken, setTaskSetId } from '../actions/task'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(
  taskReducer,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
)
export default class TaskRoot extends Component{
  render() {
    store.dispatch(fetchTask(this.props.tasks))
    store.dispatch(setAuthenticityToken(this.props.authenticity_token))
    store.dispatch(setTaskSetId(this.props.task_set_id))
    return (
      <Provider store={store}>
        <TaskApp />
      </Provider>
    )
  }
}
