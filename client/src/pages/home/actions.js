import axios from 'axios';

import * as types from './constants'


export const addTask = () => ({
  type: types.ADD_TASK,
  id: ++id,
  req: axios.get('/api/tasks')
})

let id = 0;

export const addTaskSuccess = (res) => ({
  type: types.ADD_TASK_SUCCESS,
  id: ++id,
  name: res.data.name
})