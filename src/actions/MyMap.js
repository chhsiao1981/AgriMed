import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'

export function initMyMap(rootState, myId) {
  return (dispatch, getState) => {
    dispatch(initMyMapCore(rootState, myId))
  }
}

function initMyMapCore(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.MY_MAP,
    type: types.INIT_MY_MAP,
  }
}
