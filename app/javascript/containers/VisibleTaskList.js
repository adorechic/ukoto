import { connect } from 'react-redux'
import TaskList from '../components/TaskList'

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = {
}

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default VisibleTaskList
