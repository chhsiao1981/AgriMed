import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'

export function initTitle(rootState, myId) {
  return (dispatch, getState) => {
    dispatch(initTitleCore(rootState, myId))
  }
}

function initTitleCore(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.TITLE,
    type: types.INIT_TITLE,
  }
}
