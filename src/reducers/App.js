import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, setNewState, funcMapDefault, subProcess} from '../reducers/utils'
import * as actionClasses from '../constants/ActionClasses';
import * as types from '../constants/ActionTypes';

import header from './Header'
import title from './Title'
import shotBlock from './ShotBlock'
import myImage from './MyImage'
import text from './Text'
import myMap from './MyMap'
import sysInfo from './SysInfo'

export default function app (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  switch (action.myClass) {
    case actionClasses.MY_IMAGE:
      var newSubState = subProcess(state, action, myImage)
      var newEntities = newSubState.get('Entities', Immutable.Map())
      return setNewState(state, myId, newEntities)
    case actionClasses.SHOT_BLOCK:
      var newSubState = subProcess(state, action, shotBlock)
      var newEntities = newSubState.get('Entities', Immutable.Map())
      return setNewState(state, myId, newEntities)
    case actionClasses.TITLE:
      var newSubState = subProcess(state, action, title)
      var newEntities = newSubState.get('Entities', Immutable.Map())
      return setNewState(state, myId, newEntities)
    case actionClasses.HEADER:
      var newSubState = subProcess(state, action, header)
      var newEntities = newSubState.get('Entities', Immutable.Map())
      return setNewState(state, myId, newEntities)
    case actionClasses.TEXT:
      var newSubState = subProcess(state, action, text)
      var newEntities = newSubState.get('Entities', Immutable.Map())
      return setNewState(state, myId, newEntities)
    case actionClasses.MY_MAP:
      var newSubState = subProcess(state, action, myMap)
      var newEntities = newSubState.get('Entities', Immutable.Map())
      return setNewState(state, myId, newEntities)
    case actionClasses.SYS_INFO:
      var newSubState = subProcess(state, action, sysInfo)
      var newEntities = newSubState.get('Entities', Immutable.Map())
      return setNewState(state, myId, newEntities)
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

function setHeader(state, action) {
  const {myId, myClass, headerId} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {headerId})

  return setNewState(state, myId, newEntities)
}

function setTitle(state, action) {
  const {myId, myClass, titleId} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {titleId})

  return setNewState(state, myId, newEntities)
}

function setWholeView(state, action) {
  const {myId, myClass, wholeViewId} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {wholeViewId})

  return setNewState(state, myId, newEntities)
}

function setSingle(state, action) {
  const {myId, myClass, singleId} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {singleId})

  return setNewState(state, myId, newEntities)
}

function setFeature(state, action) {
  const {myId, myClass, featureId} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {featureId})

  return setNewState(state, myId, newEntities)
}

function setRoot(state, action) {
  const {myId, myClass, rootId} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {rootId})

  return setNewState(state, myId, newEntities)
}

function setExtra(state, action) {
  const {myId, myClass, extraId} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {extraId})

  return setNewState(state, myId, newEntities)
}

function setId(state, action) {
  const {myId, myClass, idx, theId} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = mergeIn(Entities, [myId], {[idx]: theId})

  return setNewState(state, myId, newEntities)
}

var funcMap = {
  [types.INIT_APP]: initApp,
  [types.SET_HEADER]: setHeader,
  [types.SET_TITLE]: setTitle,
  [types.SET_WHOLE_VIEW]: setWholeView,
  [types.SET_SINGLE]: setSingle,
  [types.SET_FEATURE]: setFeature,
  [types.SET_ROOT]: setRoot,
  [types.SET_EXTRA]: setExtra,
  [types.SET_ID]: setId,
}

function appCore(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}
