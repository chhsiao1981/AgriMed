import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'

export function initHeader(rootState, myId) {
  return (dispatch, getState) => {
    dispatch(initHeaderCore(rootState, myId))
  }
}

function initHeaderCore(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.HEADER,
    type: types.INIT_HEADER,
  }
}
