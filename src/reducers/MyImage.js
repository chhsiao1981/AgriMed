import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, setNewState, funcMapDefault, subProcess} from '../reducers/utils'
import * as actionClasses from '../constants/ActionClasses'
import * as types from '../constants/ActionTypes'

export default function myImage (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  switch (action.myClass) {
    case actionClasses.MY_IMAGE:
      return myImageCore(state, action)
    default:
      return funcMapDefault(state, action)
  }
}

function initMyImage(state, action) {
  const {myId, myClass, shotBlockId, image} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = setIn(Entities, [myId], {myId, myClass, shotBlockId, image})

  return setNewState(state, myId, newEntities)
}

var funcMap = {
  [types.INIT_MY_IMAGE]: initMyImage,
}

function myImageCore(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}
