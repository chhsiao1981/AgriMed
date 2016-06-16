import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'


class NumberText extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: numberText} = Entities

    return (
      <div className="form-group">
        Hello NumberText: {myId}  
      </div>  
    )
  }
}

export default NumberText
