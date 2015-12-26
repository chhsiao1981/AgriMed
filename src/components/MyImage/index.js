import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'


class MyImage extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: myImage} = Entities

    return (
      <div className="form-group">
        Hello MyImage: {myId}  
      </div>  
    )
  }
}

export default HOC(MyImage)
