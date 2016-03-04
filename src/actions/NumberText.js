import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'

export function initNumberText(rootState, myId) {
  return (dispatch, getState) => {
    dispatch(initNumberTextCore(rootState, myId))
  }
}

function initNumberTextCore(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.NUMBER_TEXT,
    type: types.INIT_NUMBER_TEXT,
  }
}
