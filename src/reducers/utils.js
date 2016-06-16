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

export function pushIn(theMap, path, value) {
  var newVal = theMap.getIn(path, Immutable.List()).push(value)
  return setIn(theMap, path, newVal)
}

export function concatIn(theMap, path, values) {
  var newVal = theMap.getIn(path, Immutable.List()).concat(values)
  return setIn(theMap, path, newVal)
}

export function unionIn(theMap, path, values) {
  var newVal = theMap.getIn(path, Immutable.Set()).union(values)
  return setIn(theMap, path, newVal)
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

export function recursivePushChildrenIds(Entities, myId, parentId) {
  var myClass = Entities.getIn([myId, 'myClass'], '')
  var relatedIds = Entities.getIn([myId, 'relatedIds'], Immutable.Set())
  
  if(!parentId) return Entities

  Entities = mergeIn(Entities, [myId], {parentId})
  Entities = pushIn(Entities, [parentId, 'childrenIds'], myId)
  Entities = concatRelatedIds(Entities, parentId, relatedIds)

  var parent = Entities.get(parentId, Immutable.Map())
    
  var parentClass = parent.get('myClass', '')
  var grandParentId = parent.get('parentId', '')

  if(!grandParentId) return Entities

  return recursivePushChildrenIds(Entities, myId, grandParentId)
}

export function concatRelatedIds(Entities, myId, relatedIds) {
  if(!relatedIds) return Entities
  
  return unionIn(Entities, [myId, 'relatedIds'], relatedIds)
}

export function initCore(state, action) {
  const {myId, myClass, parentId, relatedIds} = action
  var Entities = state.get('Entities', Immutable.Map())

  var newEntities = setIn(Entities, [myId], {myId, myClass})

  newEntities = concatRelatedIds(newEntities, myId, relatedIds)
  newEntities = recursivePushChildrenIds(newEntities, myId, parentId)  

  return setNewState(state, myId, newEntities)
}
