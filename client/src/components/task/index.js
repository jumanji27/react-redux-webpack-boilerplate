import React from 'react'

import './index.css'


export default class Task extends React.Component {
  render() {
    return <div className='task'>{this.props.name}</div>
  }
}