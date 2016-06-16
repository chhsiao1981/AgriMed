import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes';

export function initLoading(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.UTIL,
    type: types.INIT_LOADING,
  }
}

export function finishLoading(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.UTIL,
    type: types.FINISH_LOADING,
  }
}

export function setId(rootState, myId, idx, theId) {
  return {
    myId,
    myClass: actionClasses.UTIL,
    type: types.SET_ID,
    idx,
    theId,
  }
}
