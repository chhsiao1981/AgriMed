import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from './DropdownTitle.css'

class DropdownTitle extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, className, title: titleStr} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: dropdownTitle} = Entities
    const {isHide} = dropdownTitle

    var classNameStr = className + ' ' + styles['root']
    var glyphClassName = styles['root-glyph'] + " glyphicon " + (isHide ? "glyphicon-triangle-right" : "glyphicon-triangle-bottom")
    var labelClassName = styles['root-label']

    var onClick = (e) => {
      console.log('DropdownTitle.onClick: to set hide: !isHide:', !isHide)
      dispatch(dropdownTitle.setHide(rootState, myId, !isHide))
    }
    
    return (
      <div className={classNameStr} onClick={onClick}>
        <h2>
          <span aria-hidden="true" className={glyphClassName}></span>
          <span> </span>
          <span className={labelClassName}>{titleStr}</span>
        </h2>
      </div>  
    )
  }
}

export default DropdownTitle
