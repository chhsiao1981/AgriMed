import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import {initHeader} from './Header'
import {initTitle} from './Title'
import {initText} from './Text'
import {initNumberText} from './NumberText'
import {initMedText} from './MedText'
import {initMyMap} from './MyMap'

export function initStep2(rootState, myId) {
  var headerId = getUUID()
  var titleId = getUUID()
  var cropId = getUUID()
  var varietyId = getUUID()
  var addressId = getUUID()
  var beforeId = getUUID()
  var dayId = getUUID()
  var sickDayId = getUUID()
  var acreId = getUUID()
  var sickAcreId = getUUID()
  var medId = getUUID()
  var fertileId = getUUID()
  var commentId = getUUID()
  var myMapId = getUUID()
  
  return (dispatch, getState) => {
    dispatch(initStep2Core(rootState, myId))
    dispatch(setHeader(rootState, myId, 'headerId', headerId))
    dispatch(setTitle(rootState, myId, 'titleId', titleId))
    dispatch(setText(rootState, myId, 'cropId', cropId))
    dispatch(setText(rootState, myId, 'varietyId', varietyId))
    dispatch(setText(rootState, myId, 'addressId', addressId))
    dispatch(setText(rootState, myId, 'beforeId', beforeId))
    dispatch(setNumberText(rootState, myId, 'dayId', dayId))
    dispatch(setNumberText(rootState, myId, 'sickDayId', sickDayId))
    dispatch(setNumberText(rootState, myId, 'acreId', acreId))
    dispatch(setNumberText(rootState, myId, 'sickAcreId', sickAcreId))
    dispatch(setMedText(rootState, myId, 'medId', medId))
    dispatch(setMedText(rootState, myId, 'fertileId', fertileId))
    dispatch(setText(rootState, myId, 'commentId', commentId))
    dispatch(setMyMap(rootState, myId, 'myMapId', myMapId))
  }
}

function initStep2Core(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.STEP2,
    type: types.INIT_STEP2,
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

function setNumberText(rootState, myId, idx, numberTextId) {
  return (dispatch, getState) => {
    dispatch(initNumberText(rootState, numberTextId))
    dispatch(setId(rootState, myId, idx, numberTextId))
  }
}

function setMedText(rootState, myId, idx, medTextId) {
  return (dispatch, getState) => {
    dispatch(initMedText(rootState, medTextId))
    dispatch(setId(rootState, myId, idx, medTextId))
  }
}

function setMyMap(rootState, myId, idx, myMapId) {
  return (dispatch, getState) => {
    dispatch(initMyMap(rootState, myMapId))
    dispatch(setId(rootState, myId, idx, myMapId))
  }
}

function setId(rootState, myId, idx, theId) {
  return {
    myId,
    myClass: actionClasses.STEP2,
    type: types.SET_ID,
    idx,
    theId,
  }
}

function submit(rootState, myId) {
  return (dispatch, getState) => {
    var currentState = getState()
    console.log('actions.Step2.submit: currentState:', currentState)
  }
}
