import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'

export function initApp(rootState, myId, parentId) {
  if(!parentId) parentId = ''
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
