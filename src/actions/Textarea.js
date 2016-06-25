import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import * as util from './util'

export function initTextarea(rootState, myId, parentId) {
  if(!parentId) parentId = ''
  
  return (dispatch, getState) => {
    dispatch(initTextareaCore(rootState, myId, parentId, []))
  }
}

function initTextareaCore(rootState, myId, parentId, relatedIds=[]) {
  return {
    myId,
    myClass: actionClasses.TEXTAREA,
    type: types.INIT_TEXTAREA,
    parentId,
    relatedIds,
    textarea: '',
    setTextarea,
  }
}

function setTextarea(rootState, myId, textarea) {
  return {
    myId,
    myClass: actionClasses.TEXTAREA,
    type: types.SET_TEXTAREA,
    textarea,
  }
}
