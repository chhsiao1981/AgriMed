import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, pushIn, setNewState, funcMapDefault, subProcess} from '../reducers/utils'
import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'

export default function shotBlock (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  switch (action.myClass) {
    case actionClasses.SHOT_BLOCK:
      return shotBlockCore(state, action)
    default:
      return funcMapDefault(state, action)
  }
}

function initShotBlock(state, action) {
  const {myId, myClass, addImages} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = setIn(Entities, [myId], {myId, myClass, addImages, imgIds: []})

  return setNewState(state, myId, newEntities)
}

function addImage(state, action) {
  const {myId, myClass, imgId} = action

  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = pushIn(Entities, [myId, 'imgIds'], imgId)

  return setNewState(state, myId, newEntities)
}

var funcMap = {
  [types.INIT_SHOT_BLOCK]: initShotBlock,
  [types.ADD_IMAGE]: addImage,
}

function shotBlockCore(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}
