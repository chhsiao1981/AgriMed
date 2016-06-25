import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, pushIn, concatIn, setNewState, funcMapDefault, subProcess, recursivePushChildrenIds, concatRelatedIds, initLoading, finishLoading, initCore} from './utils'
import util from './util'
import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'

/*
function a(state, action) {
  const {myId, myClass, temp} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {temp})

  return setNewState(state, myId, newEntities)
}
 */

function setTextarea(state, action) {
  const {myId, myClass, textarea} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {textarea})

  return setNewState(state, myId, newEntities)
}

var funcMap = {
  [types.INIT_TEXTAREA]: initCore,
  [types.SET_TEXTAREA]: setTextarea,
}

const PROC_MAP = {
  [actionClasses.UTIL]: util,
}

function textareaCore(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}


export default function textarea (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  switch (action.myClass) {
    case actionClasses.TEXTAREA:
      return textareaCore(state, action)
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
