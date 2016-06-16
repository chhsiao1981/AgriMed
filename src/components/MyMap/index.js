import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'


class MyMap extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: myMap} = Entities

    return (
      <div className="form-group">
        Hello MyMap: {myId}  
      </div>  
    )
  }
}

export default MyMap
