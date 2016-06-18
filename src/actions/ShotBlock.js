import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import * as util from './util'
import {initMyImage} from './MyImage'

export function initShotBlock(rootState, myId, parentId) {
  if(!parentId) parentId = ''
  
  return (dispatch, getState) => {
    dispatch(initShotBlockCore(rootState, myId, parentId, []))
  }
}

function initShotBlockCore(rootState, myId, parentId, relatedIds=[]) {
  return {
    myId,
    myClass: actionClasses.SHOT_BLOCK,
    type: types.INIT_SHOT_BLOCK,
    parentId,
    relatedIds,
    imgIds: [],
    addImage,
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
