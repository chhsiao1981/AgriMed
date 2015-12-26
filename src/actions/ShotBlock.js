import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import {initMyImage} from './MyImage'

export function initShotBlock(rootState, myId) {
  return (dispatch, getState) => {
    dispatch(initShotBlockCore(rootState, myId))
  }
}

function initShotBlockCore(rootState, myId) {
  return {
    myId,
    myClass: actionClasses.SHOT_BLOCK,
    type: types.INIT_SHOT_BLOCK,
    addImages,
  }
}

function addImages(rootState, myId, images) {
  return (dispatch, getState) => {
    images.map(eachImage => {
      var imgId = getUUID()
      dispatch(addImage(rootState, myId, imgId, eachImage))
    })
  }
}

function addImage(rootState, myId, imgId, image) {
  return (dispatch, getState) => {
    dispatch(initMyImage(rootState, imgId, myId, image))
    dispatch(addImageCore(rootState, myId, imgId))
  }
}

function addImageCore(rootState, myId, imgId) {
  return {
    myId,
    myClass: actionClasses.SHOT_BLOCK,
    type: types.ADD_IMAGE,
    imgId,
  }
}