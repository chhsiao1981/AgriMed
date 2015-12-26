import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, setNewState, funcMapDefault, subProcess} from '../reducers/utils'
import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'

export default function title (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  switch (action.myClass) {
    case actionClasses.TITLE:
      return titleCore(state, action)
    default:
      return funcMapDefault(state, action)
  }
}

function initTitle(state, action) {
  const {myId, myClass} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = setIn(Entities, [myId], {myId, myClass})

  return setNewState(state, myId, newEntities)
}

var funcMap = {
  [types.INIT_TITLE]: initTitle,
}

function titleCore(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}
