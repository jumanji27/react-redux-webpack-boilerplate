import React from 'react'
import { connect } from 'react-redux'

import Task from '../task'


const mapStateToProps = (state) => ({
  tasks: state.home.tasks
})

const Tasks = ({tasks}) => {
  return (
    <div>
      {tasks.map(todo =>
        <Task key={todo.id} name={todo.name} />
      )}
    </div>
  )
}


export default connect(mapStateToProps)(Tasks)