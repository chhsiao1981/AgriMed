import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'

export function initSysInfo(rootState, myId) {
  return (dispatch, getState) => {
    dispatch(initSysInfoCore(rootState, myId))
  }
}

function initSysInfoCore(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.SYS_INFO,
    type: types.INIT_SYS_INFO,
  }
}
