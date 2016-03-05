import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'

import {initHeader} from './Header'
import {initTitle} from './Title'
import {initText} from './Text'

export function initStep3(rootState, myId) {
  var headerId = getUUID()
  var titleId = getUUID()
  var nameId = getUUID()
  var telId = getUUID()
  var addressId = getUUID()
  var emailId = getUUID()
  
  return (dispatch, getState) => {
    dispatch(initStep3Core(rootState, myId))
    dispatch(setHeader(rootState, myId, 'headerId', headerId))
    dispatch(setTitle(rootState, myId, 'titleId', titleId))
    dispatch(setText(rootState, myId, 'nameId', nameId))
    dispatch(setText(rootState, myId, 'telId', telId))
    dispatch(setText(rootState, myId, 'addressId', addressId))
    dispatch(setText(rootState, myId, 'emailId', emailId))
  }
}

function initStep3Core(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.STEP3,
    type: types.INIT_STEP3,
    submit,
  }
}

function setHeader(rootState, myId, idx, headerId) {
  return (dispatch, getState) => {
    dispatch(initHeader(rootState, headerId))
    dispatch(setId(rootState, myId, idx, headerId))
  }
}

function setTitle(rootState, myId, idx, titleId) {
  return (dispatch, getState) => {
    dispatch(initTitle(rootState, titleId))
    dispatch(setId(rootState, myId, idx, titleId))
  }
}

function setText(rootState, myId, idx, textId) {
  return (dispatch, getState) => {
    dispatch(initText(rootState, textId))
    dispatch(setId(rootState, myId, idx, textId))
  }
}

function setId(rootState, myId, idx, theId) {
  return {
    myId,
    myClass: actionClasses.STEP3,
    type: types.SET_ID,
    idx,
    theId,
  }
}

function submit(rootState, myId) {
  return (dispatch, getState) => {
    var currentState = getState().toJS()
    console.log('actions.Step3.submit: currentState:', currentState)
  }
}
