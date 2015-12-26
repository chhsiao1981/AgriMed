import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from './Header.css'

class Header extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, rootState, className, header: headerStr} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: header} = Entities

    var classNameStr = className + ' ' + styles['logo']

    return (
      <div className={classNameStr}>
        <img src='images/logo.png' />
        <h1> {headerStr} </h1>
      </div>  
    )
  }
}

export default Header
