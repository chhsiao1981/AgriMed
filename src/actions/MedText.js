import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import * as util from './util'

export function initMedText(rootState, myId, parentId) {
  if(!parentId) parentId = ''
  
  return (dispatch, getState) => {
    dispatch(initMedTextCore(rootState, myId, parentId, []))
    dispatch(addInfo(rootState, myId))
  }
}

function initMedTextCore(rootState, myId, parentId, relatedIds=[]) {
  return {
    myId,
    myClass: actionClasses.MED_TEXT,
    type: types.INIT_MED_TEXT,
    parentId,
    relatedIds,
    info: [],
    addInfo,
    setInfo,
  }
}

function addInfo(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.MED_TEXT,
    type: types.ADD_INFO,
  }
}

function setInfo(rootState, myId, idx, infoIdx, value) {
  return {
    myId,
    myClass: actionClasses.MED_TEXT,
    type: types.SET_INFO,
    idx,
    infoIdx,
    value,
  }
}
