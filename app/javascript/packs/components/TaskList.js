import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = ({ tasks }) => (
  <ul>
    {
      tasks.map(
        task => <Task {...task} />
      )
    }
  </ul>
)

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default TaskList
