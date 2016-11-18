import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

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
  const currentTask = _.last(tasks);

  if (currentTask && !currentTask.loading) {
    return (
      <div className={styles.home}>
        <Button action={addTask} disabled={false} text='Add new task' />
        <Tasks />
      </div>
    )
  } else if (currentTask) {
    return (
      <div className={styles.home}>
        <Button action={addTask} disabled={true} text='Add new task' />
        <Tasks />
      </div>
    )
  } else {
    return (
      <div className={styles.home}>
        <Button action={addTask} disabled={false} text='Add new task' />
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)