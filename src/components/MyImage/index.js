import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'


class MyImage extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: myImage} = Entities

    return (
      <div className="form-group">
        Hello MyImage: {myId}  
      </div>  
    )
  }
}

export default MyImage
