import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'

export function initText(rootState, myId) {
  return (dispatch, getState) => {
    dispatch(initTextCore(rootState, myId))
  }
}

function initTextCore(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.TEXT,
    type: types.INIT_TEXT,
  }
}
