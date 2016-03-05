import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, setNewState, funcMapDefault, subProcess} from '../reducers/utils'
import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'

import header from './Header'
import title from './Title'
import text from './Text'

export default function step3 (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  switch (action.myClass) {
    case actionClasses.STEP3:
      return step3Core(state, action)
    case actionClasses.HEADER:
      var newSubState = subProcess(state, action, header)
      var newEntities = newSubState.get('Entities', Immutable.Map())
      return setNewState(state, myId, newEntities)
    case actionClasses.TITLE:
      var newSubState = subProcess(state, action, title)
      var newEntities = newSubState.get('Entities', Immutable.Map())
      return setNewState(state, myId, newEntities)
    case actionClasses.TEXT:
      var newSubState = subProcess(state, action, text)
      var newEntities = newSubState.get('Entities', Immutable.Map())
      return setNewState(state, myId, newEntities)
    default:
      return funcMapDefault(state, action)
  }
}

function initStep3(state, action) {
  const {myId, myClass, submit} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = setIn(Entities, [myId], {myId, myClass, submit})

  return setNewState(state, myId, newEntities)
}

function setId(state, action) {
  const {myId, myClass, idx, theId} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {[idx]: theId})

  return setNewState(state, myId, newEntities)
}

var funcMap = {
  [types.INIT_STEP3]: initStep3,
  [types.SET_ID]: setId,
}

function step3Core(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}
