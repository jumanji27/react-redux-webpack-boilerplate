import React from 'react'

import Task from '../task'


export default class Tasks extends React.Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(todo =>
          <Task key={todo.id} name={todo.name} />
        )}
      </div>
    )
  }
}