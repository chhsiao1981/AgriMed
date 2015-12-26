import React, {Component} from 'react'
import Empty from './Empty'
import {isUUID} from '../utils/utils'
import {isValidProps} from './utils'
import Immutable from 'immutable'

class CommonComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //props
    var currentPropKeys = Object.keys(this.props).filter(eachProp => eachProp !== 'immutableEntities' && this.props.hasOwnProperty(eachProp))

    var nextPropKeys = Object.keys(nextProps).filter(eachProp => eachProp !== 'immutableEntities' && nextProps.hasOwnProperty(eachProp))

    var currentPropSet = Immutable.Set(currentPropKeys)
    var nextPropSet = Immutable.Set(nextPropKeys)

    if(!Immutable.is(currentPropSet, nextPropSet)) return true

    var isDiff = currentPropKeys.reduce((r, eachKey, i) => {
      var currentVal = this.props[eachKey]
      var nextVal = nextProps[eachKey]
      var isDiff = currentVal !== nextVal

      return isDiff || r
    })

    if(isDiff) return true

    //immutables
    const {myId, immutableEntities: currentImmutableEntities} = this.props

    const {newMyId, immutableEntities: newImmutableEntities} = nextProps

    var currentInfo = currentImmutableEntities.get(myId, Immutable.Map())
    var newInfo = newImmutableEntities.get(myId, Immutable.Map())

    var currentKeys = currentInfo.keySeq()
    var newKeys = newInfo.keySeq()

    var currentKeySet = Immutable.Set(currentKeys)
    var newKeySet = Immutable.Set(newKeys)

    if(!Immutable.is(currentKeySet, newKeySet))
      return true

    var isDiff = currentKeys.reduce((r, eachKey, i) => {
      var currentVal = currentInfo.get(eachKey, null)      
      var newVal = newInfo.get(eachKey, null)
      var isDiff = currentVal !== newVal

      if(isDiff) return true

      if (!isUUID(currentVal)) return r

      var currentValVal = currentImmutableEntities.get(currentVal, null)
      var newValVal = newImmutableEntities.get(newVal, null)

      isDiff = currentValVal !== newValVal

      return isDiff || r
    }, false)

    return isDiff
  }

}

export default CommonComponent
