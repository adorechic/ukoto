import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TaskApp from './TaskApp'
import taskReducer from '../reducers/taskReducer'
import { fetchTask } from '../actions/task'

const store = createStore(taskReducer)
export default class TaskRoot extends Component{
  render() {
    store.dispatch(fetchTask(this.props.tasks))
    return (
      <Provider store={store}>
        <TaskApp />
      </Provider>
    )
  }
}
