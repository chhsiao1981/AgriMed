import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from './MyImage.css'


class MyImage extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, rootState, className} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: {image: image}} = Entities

    console.log('MyImage.render: image:', image)

    var src = image.preview

    var classNameStr = className + ' ' + styles['img']

    return (
      <img src={src} className={classNameStr}/>
    )
  }
}

export default MyImage
