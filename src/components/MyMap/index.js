import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'


class MyMap extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, rootState} = this.props
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
