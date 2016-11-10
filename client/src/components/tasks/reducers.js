import * as types from '../../pages/home/constants.js'


const tasks = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TASK_SUCCESS:
      if (state.length) {
        return [
          ...state,
          {
            id: action.id,
            name: action.name
          }
        ]
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