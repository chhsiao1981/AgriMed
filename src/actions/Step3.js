import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'

export function initStep3(rootState, myId) {
  return (dispatch, getState) => {
    dispatch(initStep3Core(rootState, myId))
  }
}

function initStep3Core(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.STEP3,
    type: types.INIT_STEP3,
  }
}
