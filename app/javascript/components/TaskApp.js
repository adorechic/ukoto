import React from 'react'
import VisibleTaskList from '../containers/VisibleTaskList'
import AddTask from '../containers/AddTask'

const TaskApp = () => (
  <div>
    <AddTask />
    <VisibleTaskList />
  </div>
)

export default TaskApp
