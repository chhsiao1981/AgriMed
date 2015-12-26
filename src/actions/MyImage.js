import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'

export function initMyImage(rootState, myId, shotBlockId, image) {
  return (dispatch, getState) => {
    dispatch(initMyImageCore(rootState, myId, shotBlockId, image))
  }
}

function initMyImageCore(rootState, myId, shotBlockId, image) {
  return {
    myId,
    myClass: actionClasses.MY_IMAGE,
    type: types.INIT_MY_IMAGE,
    shotBlockId,
    image,
  }
}
