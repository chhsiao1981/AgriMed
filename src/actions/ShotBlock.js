import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import * as util from './util'

export function initShotBlock(rootState, myId, parentId) {
  if(!parentId) parentId = ''
  
  return (dispatch, getState) => {
    dispatch(initShotBlockCore(rootState, myId, parentId, []))
  }
}

function initShotBlockCore(rootState, myId, parentId, relatedIds=[]) {
  return {
    myId,
    myClass: actionClasses.SHOT_BLOCK,
    type: types.INIT_SHOT_BLOCK,
    parentId,
    relatedIds,
  }
}
