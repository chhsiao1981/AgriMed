import React, {Component} from 'react'
import Empty from './Empty'
import {isUUID} from '../utils/utils'
import {isValidProps} from './utils'
import Immutable from 'immutable'

class CommonComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const {myId, immutableEntities: currentImmutableEntities} = this.props

    const {immutableEntities: newImmutableEntities} = nextProps

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
