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
import {initShotBlock} from './ShotBlock'
import {initTextarea} from './Textarea'
import * as util from './util'


export function initApp(rootState, myId, parentId) {
  if(!parentId) parentId = ''

  var headerId = getUUID()
  var titleId = getUUID()
  var wholeViewId = getUUID()
  var singleId = getUUID()
  var featureId = getUUID()
  var rootId = getUUID()
  var extraId = getUUID()
  var nameId = getUUID()
  var telId = getUUID()
  var addressId = getUUID()
  var emailId = getUUID()
  var myMapId = getUUID()
  var cropId = getUUID()
  var varietyId = getUUID()
  var beforeId = getUUID()
  var dayId = getUUID()
  var sickDayId = getUUID()
  var acreId = getUUID()
  var sickAcreId = getUUID()
  var medId = getUUID()
  var fertileId = getUUID()
  var commentId = getUUID()
  
  return (dispatch, getState) => {
    dispatch(initAppCore(rootState, myId))

    dispatch(setHeader(rootState, myId, headerId))
    dispatch(setTitle(rootState, myId, titleId))
    dispatch(setShotBlock(rootState, myId, 'wholeViewId', wholeViewId))
    dispatch(setShotBlock(rootState, myId, 'singleId', singleId))
    dispatch(setShotBlock(rootState, myId, 'featureId', featureId))
    dispatch(setShotBlock(rootState, myId, 'rootId', rootId))
    dispatch(setShotBlock(rootState, myId, 'extraId', extraId))
    dispatch(setText(rootState, myId, 'nameId', nameId))
    dispatch(setText(rootState, myId, 'telId', telId))
    dispatch(setText(rootState, myId, 'addressId', addressId))
    dispatch(setText(rootState, myId, 'emailId', emailId))
    dispatch(setMyMap(rootState, myId, 'myMapId', myMapId))
    dispatch(setText(rootState, myId, 'cropId', cropId))
    dispatch(setText(rootState, myId, 'varietyId', varietyId))
    dispatch(setText(rootState, myId, 'beforeId', beforeId))
    dispatch(setNumberText(rootState, myId, 'dayId', dayId))
    dispatch(setNumberText(rootState, myId, 'acreId', acreId))
    dispatch(setNumberText(rootState, myId, 'sickAcreId', sickAcreId))
    dispatch(setTextarea(rootState, myId, 'commentId', commentId))
  }
}

function initAppCore(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.APP,
    type: types.INIT_APP,
  }
}

function setHeader(rootState, myId, headerId) {
  return (dispatch, getState) => {
    dispatch(initHeader(rootState, headerId, myId))
    dispatch(util.setId(rootState, myId, 'headerId', headerId))
  }
}

function setTitle(rootState, myId, titleId) {
  return (dispatch, getState) => {
    dispatch(initTitle(rootState, titleId, myId))
    dispatch(util.setId(rootState, myId, 'titleId', titleId))
  }
}

function setShotBlock(rootState, myId, idx, theId) {
  return (dispatch, getState) => {
    dispatch(initShotBlock(rootState, theId, myId))
    dispatch(util.setId(rootState, myId, idx, theId))
  }
}

function setText(rootState, myId, idx, theId) {
  return (dispatch, getState) => {
    dispatch(initText(rootState, theId, myId))
    dispatch(util.setId(rootState, myId, idx, theId))
  }
}

function setNumberText(rootState, myId, idx, theId) {
  return (dispatch, getState) => {
    dispatch(initNumberText(rootState, theId, myId))
    dispatch(util.setId(rootState, myId, idx, theId))
  }
}

function setTextarea(rootState, myId, idx, theId) {
  return (dispatch, getState) => {
    dispatch(initTextarea(rootState, theId, myId))
    dispatch(util.setId(rootState, myId, idx, theId))
  }
}

function setMyMap(rootState, myId, idx, theId) {
  return (dispatch, getState) => {
    dispatch(initMyMap(rootState, theId, myId))
    dispatch(util.setId(rootState, myId, idx, theId))
  }
}
