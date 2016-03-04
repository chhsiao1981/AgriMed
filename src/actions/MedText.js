import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'

export function initMedText(rootState, myId) {
  return (dispatch, getState) => {
    dispatch(initMedTextCore(rootState, myId))
  }
}

function initMedTextCore(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.MED_TEXT,
    type: types.INIT_MED_TEXT,
  }
}
