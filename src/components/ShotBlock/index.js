import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'


class ShotBlock extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: shotBlock} = Entities

    return (
      <div className="form-group">
        Hello ShotBlock: {myId}  
      </div>  
    )
  }
}

export default ShotBlock
