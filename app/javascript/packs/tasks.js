import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TaskApp from './components/TaskApp'
import taskReducer from './reducers/taskReducer'

const store = createStore(taskReducer)

export default class TaskRoot extends Component{
  render() {
    return (
      <Provider store={store}>
        <TaskApp />
      </Provider>
    )
  }
}
