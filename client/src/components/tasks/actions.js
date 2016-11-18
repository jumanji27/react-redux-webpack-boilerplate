import axios from 'axios';

import * as types from '../../constants'

let id = 0;

export const addTask = () => ({
  type: types.ADD_TASK,
  id: ++id,
  loading: true,
  req: axios.get('/api/tasks')
})

export const addTaskSuccess = (res) => ({
  type: types.ADD_TASK_SUCCESS,
  id: id,
  name: res.data.name
})