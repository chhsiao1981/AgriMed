import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, setNewState, funcMapDefault, subProcess} from '../reducers/utils'
import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'

export default function header (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  switch (action.myClass) {
    case actionClasses.HEADER:
      return headerCore(state, action)
    default:
      return funcMapDefault(state, action)
  }
}

function initHeader(state, action) {
  const {myId, myClass} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = setIn(Entities, [myId], {myId, myClass})

  return setNewState(state, myId, newEntities)
}

var funcMap = {
  [types.INIT_HEADER]: initHeader,
}

function headerCore(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}
