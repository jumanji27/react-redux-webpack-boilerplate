import _ from 'lodash'

import * as types from '../../constants'


const tasks = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TASK:
      if (state.length) {
        return [
          ...state,
          {
            id: action.id,
            loading: action.loading
          }
        ]
      } else {
        return [{
          id: action.id,
          loading: action.loading
        }]
      }

    case types.ADD_TASK_SUCCESS:
      if (state.length) {
        const newState = Object.assign([], state);

        newState[newState.length - 1] = {
          id: action.id,
          name: action.name
        }

        return newState
      } else {
        return [{
          id: action.id,
          name: action.name
        }]
      }

    default:
      return state
  }
}


export default tasks