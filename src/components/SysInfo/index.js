import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'


class SysInfo extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: sysInfo} = Entities

    return (
      <div className="form-group">
        Hello SysInfo: {myId}  
      </div>  
    )
  }
}

export default SysInfo
