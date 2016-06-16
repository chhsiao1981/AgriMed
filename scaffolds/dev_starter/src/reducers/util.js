import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, pushIn, concatIn, setNewState, funcMapDefault, subProcess, recursivePushChildrenIds, concatRelatedIds, initCore} from './utils'
import * as types from '../constants/ActionTypes';


function setId(state, action) {
  const {myId, myClass, idx, theId} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {[idx]: theId})

  return setNewState(state, myId, newEntities)
}

function initLoading(state, action) {
  const {myId} = action

  var Entities = state.get('Entities', Immutable.Map())
  var newEntities = mergeIn(Entities, [myId], {isLoading: true})

  return setNewState(state, myId, newEntities)
}

function finishLoading(state, action) {
  const {myId} = action

  var Entities = state.get('Entities', Immutable.Map())
  var newEntities = mergeIn(Entities, [myId], {isLoading: false})

  return setNewState(state, myId, newEntities)
}

var funcMap = {
  [types.SET_ID]: setId,
  [types.INIT_LOADING]: initLoading,
  [types.FINISH_LOADING]: finishLoading,
}


export default function app (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  console.log('reducers.App: myId:', myId)

  return utilCore(state, action)
}
