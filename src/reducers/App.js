import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, pushIn, concatIn, setNewState, funcMapDefault, subProcess, recursivePushChildrenIds, concatRelatedIds, initCore} from './utils'
import util from './util'
import * as actionClasses from '../constants/ActionClasses';
import * as types from '../constants/ActionTypes';

import header from './Header'
import title from './Title'
import shotBlock from './ShotBlock'
import myImage from './MyImage'
import text from './Text'
import myMap from './MyMap'
import textarea from './Textarea'
import numberText from './NumberText'
import medText from './MedText'


const PROC_MAP = {
  [actionClasses.UTIL]: util,
  [actionClasses.HEADER]: header,
  [actionClasses.TITLE]: title,
  [actionClasses.SHOT_BLOCK]: shotBlock,
  [actionClasses.MY_IMAGE]: myImage,
  [actionClasses.TEXT]: text,
  [actionClasses.MY_MAP]: myMap,
  [actionClasses.TEXTAREA]: textarea,
  [actionClasses.NUMBER_TEXT]: numberText,
  [actionClasses.MED_TEXT]: medText,
}

function initApp(state, action) {
  return initCore(state, action)
}

var funcMap = {
  [types.INIT_APP]: initApp,
}


/**
 * default setup
 */

function appCore(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}

export default function app (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  console.log('reducers.App: myId:', myId)

  switch (action.myClass) {
    case actionClasses.APP:
      return appCore(state, action)
    default:
      if(!myId) return state

      if(PROC_MAP[action.myClass]) {
        var proc = PROC_MAP[action.myClass]
        var newSubState = subProcess(state, action, proc)
        var newEntities = newSubState.get('Entities', Immutable.Map())
        return setNewState(state, myId, newEntities)        
      }

      return funcMapDefault(state, action)
  }
}
