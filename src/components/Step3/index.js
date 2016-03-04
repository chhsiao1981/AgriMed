import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'


class Step3 extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: step3} = Entities

    return (
      <div className="form-group">
        Hello Step3: {myId}  
      </div>  
    )
  }
}

export default HOC(Step3)
