import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, setNewState, funcMapDefault, subProcess} from '../reducers/utils'
import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'

export default function text (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  switch (action.myClass) {
    case actionClasses.TEXT:
      return textCore(state, action)
    default:
      return funcMapDefault(state, action)
  }
}

function initText(state, action) {
  const {myId, myClass, setText} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = setIn(Entities, [myId], {myId, myClass, setText})

  return setNewState(state, myId, newEntities)
}

function setText(state, action) {
  const {myId, myClass, text} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {text})

  return setNewState(state, myId, newEntities)
}

var funcMap = {
  [types.INIT_TEXT]: initText,
  [types.SET_TEXT]: setText,
}

function textCore(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}
