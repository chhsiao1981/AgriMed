import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, setNewState, funcMapDefault} from '../reducers/utils'
import * as actionClasses from '../constants/ActionClasses';
import * as types from '../constants/ActionTypes';

export default function app (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  switch (action.myClass) {
    case actionClasses.APP:
      return appCore(state, action)
    default:
      return funcMapDefault(state, action)
  }
}

function initApp(state, action) {
  const {myId, myClass} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = setIn(Entities, [myId], {myId, myClass})

  return setNewState(state, myId, newEntities)
}

var funcMap = {
  [types.INIT_APP]: initApp,
}

function appCore(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}
