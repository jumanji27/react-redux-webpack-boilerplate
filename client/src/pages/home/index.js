import React from 'react'
import { connect } from 'react-redux'

import { addTask, addTaskSuccess } from '../../components/tasks/actions'

import * as types from '../../constants'

import Button from '../../ui-kit/button'

import Tasks from '../../components/tasks'

import styles from './index.css'


const mapStateToProps = (state) => ({
  tasks: state.home.tasks
})

const mapDispatchToProps = (dispatch) => ({
  addTask: () => {
    dispatch(addTask()).req
      .then((res) => {
        dispatch(
          addTaskSuccess(res)
        )
      });
  }
})

const Home = ({tasks, addTask}) => {
  if (tasks) {
    return (
      <div className={styles.home}>
        <Button action={addTask} text='Add new task' />
        <Tasks />
      </div>
    )
  } else {
    return (
      <div className={styles.home}>
        <Button action={addTask} text='Add new task' />
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)