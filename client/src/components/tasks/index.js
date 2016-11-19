import React from 'react'
import { connect } from 'react-redux'

import Task from '../task'


const mapStateToProps = (state) => ({
  tasks: state.home.tasks
})

const Tasks = ({tasks}) => {
  return (
    <div>
      {tasks.map((task) => {
        !task.loading ? <Task key={task.id} name={task.name} /> : null
      })}
    </div>
  )
}


export default connect(mapStateToProps)(Tasks)