import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import * as util from './util'

export function initNumberText(rootState, myId, parentId) {
  if(!parentId) parentId = ''
  
  return (dispatch, getState) => {
    dispatch(initNumberTextCore(rootState, myId, parentId, []))
  }
}

function initNumberTextCore(rootState, myId, parentId, relatedIds=[]) {
  return {
    myId,
    myClass: actionClasses.NUMBER_TEXT,
    type: types.INIT_NUMBER_TEXT,
    parentId,
    relatedIds,
    text: '',
    setText,
  }
}

function setText(rootState, myId, text) {
  return {
    myId,
    myClass: actionClasses.NUMBER_TEXT,
    type: types.SET_TEXT,
    text,
  }
}
