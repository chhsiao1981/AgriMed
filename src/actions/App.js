import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes';
import {getUUID} from '../utils/utils'

export function initApp(rootState, myId) {
  return (dispatch, getState) => {
    dispatch(initAppCore(rootState, myId))
  }
}

function initAppCore(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.APP,
    type: types.INIT_APP,
  }
}
