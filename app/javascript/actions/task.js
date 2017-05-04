export const fetchTask = (tasks) => ({
  type: 'FETCH_TASK',
  tasks
})

export const addTask = (title) => ({
  type: 'ADD_TASK',
  title
})
