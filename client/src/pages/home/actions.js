import axios from 'axios';

import * as types from './constants.js'


export const addTask = () => {
  let req = axios.get('/dev-api/tasks.json');

  return {
    type: types.ADD_TASK,
    id: ++id,
    req
  }
}

let id = 0;

export const addTaskSuccess = (res) => {
  return {
    type: types.ADD_TASK_SUCCESS,
    id: ++id,
    name: res.data.name
  }
}