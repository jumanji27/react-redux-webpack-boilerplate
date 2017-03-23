import * as types from '../../layout/constants';


const entity = (state = {}, action) => {
  switch (action.type) {
    case types.GO_TO_ENTITY:
      return {
        ...state,
        entity: action.entity,
      };

    default:
      return state;
  }
};


export default entity;
