import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import * as util from './util'

export function initDropdownTitle(rootState, myId, parentId) {
  if(!parentId) parentId = ''
  
  return (dispatch, getState) => {
    dispatch(initDropdownTitleCore(rootState, myId, parentId, []))
  }
}

function initDropdownTitleCore(rootState, myId, parentId, relatedIds=[]) {
  return {
    myId,
    myClass: actionClasses.DROPDOWN_TITLE,
    type: types.INIT_DROPDOWN_TITLE,
    parentId,
    relatedIds,
    isHide: false,
    setHide,
  }
}

function setHide(rootState, myId, isHide) {
  return {
    myId,
    myClass: actionClasses.DROPDOWN_TITLE,
    type: types.SET_HIDE,
    isHide,
  }
}
