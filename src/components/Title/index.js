import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from './Title.css'

class Title extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, className, title: titleStr} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: title} = Entities

    var classNameStr = className + ' ' + styles['root']
    
    return (
      <div className={classNameStr}>
        <h2>{titleStr}</h2>
      </div>  
    )
  }
}

export default Title
