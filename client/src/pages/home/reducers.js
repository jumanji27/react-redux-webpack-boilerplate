import { combineReducers } from 'redux'

import tasks from '../../components/tasks/reducers.js'


const reducers =
  combineReducers({
    tasks
  })


export default reducers