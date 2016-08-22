import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from './MyImage.css'


class MyImage extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, className} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: {path: src}} = Entities

    var classNameStr = className + ' ' + styles['img']
    
    return (
      <img src={src} className={classNameStr}/>
    )
  }
}

export default MyImage
