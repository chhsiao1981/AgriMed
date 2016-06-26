import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from './DropdownTitle.css'

class DropdownTitle extends CommonComponent {
  constructor(props) {
    super(props)
    this.state = {hide: false}
  }
  
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, className, title: titleStr} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: dropdownTitle} = Entities

    var classNameStr = className + ' ' + styles['root']
    var labelClassName = "glyphicon " + (this.state.hide ? "glyphicon-menu-right" : "glyphicon-menu-down")

    var onClick = (e) => {
      this.setState({hide: !this.state.hide})
    }
    
    return (
      <div className={classNameStr} onClick={onClick}>
        
        <h2><span aria-hidden="true" className={labelClassName}></span>{titleStr}</h2>
      </div>  
    )
  }
}

export default DropdownTitle
