import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes';
import {getUUID} from '../utils/utils'

import {initHeader} from './Header'

import {initTitle} from './Title'

import {initShotBlock} from './ShotBlock'

export function initApp(rootState, myId) {
  var headerId = getUUID()
  var titleId = getUUID()
  var wholeViewId = getUUID()
  var singleId = getUUID()
  var featureId = getUUID()
  var rootId = getUUID()
  var extraId = getUUID()

  return (dispatch, getState) => {
    dispatch(initAppCore(rootState, myId))
    dispatch(setHeader(rootState, myId, headerId))
    dispatch(setTitle(rootState, myId, titleId))
    dispatch(setWholeView(rootState, myId, wholeViewId))
    dispatch(setSingle(rootState, myId, singleId))
    dispatch(setFeature(rootState, myId, featureId))
    dispatch(setRoot(rootState, myId, rootId))
    dispatch(setExtra(rootState, myId, extraId))
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
    dispatch(initHeader(rootState, headerId))
    dispatch(setHeaderCore(rootState, myId, headerId))
  }
}

function setHeaderCore(rootState, myId, headerId) {
  return {
    myId,
    myClass: actionClasses.APP,
    type: types.SET_HEADER,
    headerId,
  }
}

function setTitle(rootState, myId, titleId) {
  return (dispatch, getState) => {
    dispatch(initTitle(rootState, titleId))
    dispatch(setTitleCore(rootState, myId, titleId))
  }
}

function setTitleCore(rootState, myId, titleId) {
  return {
    myId,
    myClass: actionClasses.APP,
    type: types.SET_TITLE,
    titleId,
  }
}

function setWholeView(rootState, myId, wholeViewId) {
  return (dispatch, getState) => {
    dispatch(initShotBlock(rootState, wholeViewId))
    dispatch(setWholeViewCore(rootState, myId, wholeViewId))
  }
}

function setWholeViewCore(rootState, myId, wholeViewId) {
  return {
    myId,
    myClass: actionClasses.APP,
    type: types.SET_WHOLE_VIEW,
    wholeViewId,
  }
}

function setSingle(rootState, myId, singleId) {
  return (dispatch, getState) => {
    dispatch(initShotBlock(rootState, singleId))
    dispatch(setSingleCore(rootState, myId, singleId))
  }
}

function setSingleCore(rootState, myId, singleId) {
  return {
    myId,
    myClass: actionClasses.APP,
    type: types.SET_SINGLE,
    singleId,
  }
}

function setFeature(rootState, myId, featureId) {
  return (dispatch, getState) => {
    dispatch(initShotBlock(rootState, featureId))
    dispatch(setFeatureCore(rootState, myId, featureId))
  }
}

function setFeatureCore(rootState, myId, featureId) {
  return {
    myId,
    myClass: actionClasses.APP,
    type: types.SET_FEATURE,
    featureId,
  }
}

function setRoot(rootState, myId, rootId) {
  return (dispatch, getState) => {
    dispatch(initShotBlock(rootState, rootId))
    dispatch(setRootCore(rootState, myId, rootId))
  }
}

function setRootCore(rootState, myId, rootId) {
  return {
    myId,
    myClass: actionClasses.APP,
    type: types.SET_ROOT,
    rootId,
  }
}

function setExtra(rootState, myId, extraId) {
  return (dispatch, getState) => {
    dispatch(initShotBlock(rootState, extraId))
    dispatch(setExtraCore(rootState, myId, extraId))
  }
}

function setExtraCore(rootState, myId, extraId) {
  return {
    myId,
    myClass: actionClasses.APP,
    type: types.SET_EXTRA,
    extraId,
  }
}