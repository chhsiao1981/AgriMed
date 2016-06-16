import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import * as util from './util'

export function initMedText(rootState, myId, parentId) {
  if(!parentId) parentId = ''
  
  return (dispatch, getState) => {
    dispatch(initMedTextCore(rootState, myId, parentId, []))
  }
}

function initMedTextCore(rootState, myId, parentId, relatedIds=[]) {
  return {
    myId,
    myClass: actionClasses.MED_TEXT,
    type: types.INIT_MED_TEXT,
    parentId,
    relatedIds,
  }
}
