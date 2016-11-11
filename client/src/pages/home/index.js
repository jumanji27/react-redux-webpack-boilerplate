import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { addTask, addTaskSuccess } from './actions'

import * as types from './constants'

import Button from '../../ui-kit/button'

import Tasks from '../../components/tasks'

import './index.css'


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

const Home = ({ tasks, addTask }) => {
  if (tasks) {
    return (
      <div className='home'>
        <Button action={addTask} text='Add new task' />
        <Tasks tasks={tasks} />
      </div>
    )
  } else {
    return (
      <div className='home'>
        <Button action={addTask} text='Add new task' />
      </div>
    )
  }
}

Home.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })),
  addTask: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)