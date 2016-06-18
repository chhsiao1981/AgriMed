import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import * as util from './util'

export function initMyImage(rootState, myId, parentId, image) {
  if(!parentId) parentId = ''
  
  return (dispatch, getState) => {
    dispatch(initMyImageCore(rootState, myId, image, parentId, []))
  }
}

function initMyImageCore(rootState, myId, image, parentId, relatedIds=[]) {
  return {
    myId,
    myClass: actionClasses.MY_IMAGE,
    type: types.INIT_MY_IMAGE,
    image,
    parentId,
    relatedIds,
  }
}
