import React, {Component} from 'react'
import Empty from './Empty'
import {isUUID} from '../utils/utils'
import {isValidProps} from './utils'
import Immutable from 'immutable'

function isDiffDict(myId, myClass, current, next, prompt) {
  var currentKeys = Object.keys(current).filter(eachKey => isValidKey(eachKey, current))
  var nextKeys = Object.keys(next).filter(eachKey => isValidKey(eachKey, next))
  
  if(isDiffKeys(currentKeys, nextKeys)) return true

  var isDiff = currentKeys.reduce((r, eachKey, i) => {
    var currentVal = current[eachKey]
    var nextVal = next[eachKey]
    var isDiff = currentVal !== nextVal

    if(isDiff)
      console.log('CommonComponent: prompt:', prompt, 'myId:', myId, 'myClass:', myClass, 'eachKey:', eachKey, 'currentVal:', currentVal, 'nextVal:', nextVal, 'isDiff:', isDiff)

    return isDiff || r
  }, false)
}

function isValidKey(key, obj) {
  if(key === 'immutableEntities') return false
  if(key === 'Entities') return false
  if(typeof obj[key] === 'function') return false
  if(typeof obj[key] === 'object') return false
  return obj.hasOwnProperty(key)
}

function isDiffKeys(currentKeys, nextKeys) {
  var currentSet = new Set(currentKeys)
  var nextSet = new Set(nextKeys)
  
  var currentKeysNotInNextSet = currentKeys.filter(eachKey => !nextSet.has(eachKey))
  if(currentKeysNotInNextSet.length) return true
  
  var nextKeysNotInCurrentSet = nextKeys.filter(eachKey => !currentSet.has(eachKey))
  if(nextKeysNotInCurrentSet.length) return true

  return false
}

function isDiffImmutable(myId, myClass, currentImmutableEntities, nextImmutableEntities) {
  var currentInfo = currentImmutableEntities.get(myId, Immutable.Map())
  var nextInfo = nextImmutableEntities.get(myId, Immutable.Map())

  if(currentInfo !== nextInfo) {
    console.log('CommonComponent.isDiffImmutable: myId:', myId, 'myClass:', myClass, 'currentInfo:', currentInfo, 'nextInfo:', nextInfo)
    return true
  }

  var currentChildrenIds = currentInfo.get('childrenIds', Immutable.List()).toJS()
  var nextChildrenIds = currentInfo.get('childrenIds', Immutable.List()).toJS()
  if(isDiffRelatedImmutable(myId, myClass, currentImmutableEntities, nextImmutableEntities, currentChildrenIds, nextChildrenIds, 'childrenIds'))
     return true

  var currentRelatedIds = currentInfo.get('relatedIds', Immutable.List()).toJS()
  var nextRelatedIds = currentInfo.get('relatedIds', Immutable.List()).toJS()
  if(isDiffRelatedImmutable(myId, myClass, currentImmutableEntities, nextImmutableEntities, currentChildrenIds, nextChildrenIds, 'relatedIds'))
     return true

  return false
}

function isDiffRelatedImmutable(myId, myClass, currentImmutableEntities, nextImmutableEntities, currentIds, nextIds, prompt) {
  if(isDiffKeys(currentIds, nextIds)) {
    console.log('CommonComponent.isDiffRelatedImmutable: prompt:', prompt, 'myId:', myId, 'myClass:', myClass, 'currentIds:', currentIds, 'nextIds:', nextIds)
    return true
  }

  var isDiff = currentIds.map(eachId => {
    var currentInfo = currentImmutableEntities.get(eachId, undefined)
    var nextInfo = nextImmutableEntities.get(eachId, undefined)
    if(currentInfo !== nextInfo) {
      console.log('CommonComponent.isDiffRelatedImmutable: prompt:', prompt, 'myId:', myId, 'myClass:', myClass, 'eachId:', eachId, 'currentInfo:', currentInfo, 'nextInfo:', nextInfo)
      return true
    }
  })

  return isDiff
}

class CommonComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const {myId, Entities} = nextProps
    const {[myId]: myEntity} = Entities
    var myClass = myEntity ? myEntity.myClass : ''    

    var isDiff = false
    
    if(!myEntity) {
      console.log('CommonComponent.shouldComponentUpdate: unable to get myEntity! myId:', myId)
    }

    //state
    if(!this.state && nextState) {
      console.log('CommonComponent (final-state): myId:', myId, 'myClass:', myClass, 'this.state:', this.state, 'next.state:', nextState.state, 'isDiff: true')
      return true
    }

    if(this.state && nextState) {
      isDiff = isDiffDict(nextProps.myId, myClass, this.state, nextState, 'state')
      if(isDiff) {
        console.log('CommonComponent (final-state): myId:', myId, 'currentState:', this.state, 'nextState:', nextState, 'isDiff: true')
        return true
      }
    }
    
    //props
    isDiff = isDiffDict(myId, myClass, this.props, nextProps, 'props')
    if(isDiff) {
        console.log('CommonComponent (final-state): myId:', myId, 'currentProps:', this.props, 'nextProps:', nextProps, 'isDiff: true')
        return true
    }

    //immutables
    const {immutableEntities: currentImmutableEntities} = this.props

    const {immutableEntities: nextImmutableEntities} = nextProps

    isDiff = isDiffImmutable(myId, myClass, currentImmutableEntities, nextImmutableEntities)

    if(isDiff) {
        console.log('CommonComponent (final-state): myId:', myId, 'currentImmutableEntities:', currentImmutableEntities, 'nextImmutableEntities:', nextImmutableEntities, 'isDiff: true')
        return true
    }
    
    return isDiff
  }
}

export default CommonComponent
