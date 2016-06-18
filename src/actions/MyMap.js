import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'
import {getUUID} from '../utils/utils'
import Immutable from 'immutable'
import * as util from './util'

export function initMyMap(rootState, myId, parentId) {
  if(!parentId) parentId = ''
  
  return (dispatch, getState) => {
    dispatch(initMyMapCore(rootState, myId, parentId, []))
  }
}

function initMyMapCore(rootState, myId, parentId, relatedIds=[]) {
  return {
    myId,
    myClass: actionClasses.MY_MAP,
    type: types.INIT_MY_MAP,
    parentId,
    relatedIds,
    setLatLon,
  }
}

function setLatLon(rootState, myId, lat, lon) {
  return {
    myId,
    myClass: actionClasses.MY_MAP,
    type: types.SET_LAT_LON,
    lat,
    lon,
  }
}
