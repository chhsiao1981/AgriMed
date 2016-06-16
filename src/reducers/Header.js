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

var funcMap = {
  [types.INIT_HEADER]: initCore,
}

const PROC_MAP = {
  [actionClasses.UTIL]: util,
}

function headerCore(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}


export default function header (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  switch (action.myClass) {
    case actionClasses.HEADER:
      return headerCore(state, action)
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
