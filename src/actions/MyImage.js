import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import * as util from './util'
import {CALL_API} from '../middlewares/api'
import config from 'config'
const {API_ROOT} = config

export function initMyImage(rootState, myId, parentId, image) {
  if(!parentId) parentId = ''
  
  return (dispatch, getState) => {
    dispatch(initMyImageCore(rootState, myId, image, parentId, []))
  }
}

function initMyImageCore(rootState, myId, image, parentId, relatedIds=[]) {
  return (dispatch, getState) => {
    dispatch(uploadImage(image))
    .then((res) => {
      if(!(res && res.response && res.response.success))
        return

      var path = API_ROOT + res.response.path

      return dispatch(uploadImagePostprocess(rootState, myId, path, parentId, relatedIds))
    })
    
  }
}


function uploadImage(image) {
  var params = {}
  var files = {'file': image}

  return {
    myClass: actionClasses.MY_IMAGE,
    [CALL_API]: {
      types: [ types.PROMISE_REQUEST, types.PROMISE_SUCCESS, types.PROMISE_FAILURE ],
      endpoint: '/upload/img',
      method: 'post',
      params,
      files,
    }
  }
}

function uploadImagePostprocess(rootState, myId, path, parentId, relatedIds) {
  return {
    myId,
    myClass: actionClasses.MY_IMAGE,
    type: types.INIT_MY_IMAGE,
    path,
    parentId,
    relatedIds,
  }
}
