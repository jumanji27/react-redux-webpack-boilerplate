import { combineReducers } from 'redux'

import tasks from '../../components/tasks/reducers'


const reducers =
  combineReducers({
    tasks
  })


export default reducers