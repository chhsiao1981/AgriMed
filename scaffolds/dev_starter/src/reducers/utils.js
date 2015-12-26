import Immutable from 'immutable';


export function setIn(theMap, path, value) {
  /*
  * wrap function for set deep path in Immutable Map
  */
  console.log('reducers.util.setIn: theMap:', theMap, 'path:', path, 'value:', value)
  return theMap.setIn(path, Immutable.fromJS(value))
}

export function deleteIn(theMap, path, value) {
  /*
  * wrap function for delete deep path in Immutable Map
  */
  return theMap.deleteIn(path, value)
}

export function mergeIn(theMap, path, value) {
  /*
  * wrap function for merge delete path in Immutable Map
  */
  return theMap.mergeIn(path, Immutable.fromJS(value))
}

export function setNewState(state, myId, Entities) {
  /*
  * construct newState as myId and Entities
  */
  return state.setIn(['myId'], myId)
    .setIn(['Entities'], Entities)
}

export function funcMapDefault(state, action) {
  /*
  * return default function
  */
  return state
}

export function subProcess(state, action, func) {
  const {myId} = state
  const {myId: subId} = action

  var Entities = state.get('Entities', Immutable.Map())

  var subState = Immutable.Map({myId: subId, Entities})
  console.log('reducers.utils.subProcess: state:', state, 'action:', action, 'subId:', subId, 'Entities:', Entities, 'subState:', subState)
  return func(subState, action)
}
