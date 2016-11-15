import React from 'react'

import styles from './index.css'


export default class Task extends React.Component {
  render() {
    return (
      <div className={styles.task}>
        <span className={styles.icon}></span>
        {this.props.name}
      </div>
    )
  }
}