import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ title }) => (
  <li>
    {title}
  </li>
)

Task.propTypes = {
  title: PropTypes.string.isRequired
}

export default Task
