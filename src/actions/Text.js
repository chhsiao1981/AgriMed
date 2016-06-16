import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import * as util from './util'

export function initText(rootState, myId, parentId) {
  if(!parentId) parentId = ''
  
  return (dispatch, getState) => {
    dispatch(initTextCore(rootState, myId, parentId, []))
  }
}

function initTextCore(rootState, myId, parentId, relatedIds=[]) {
  return {
    myId,
    myClass: actionClasses.TEXT,
    type: types.INIT_TEXT,
    parentId,
    relatedIds,
  }
}
