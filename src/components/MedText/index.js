import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from '../Common.css'

class MedText extends CommonComponent {
  constructor(props) {
    super(props)
    this.state = {
      hide: false,
    }
  }
  
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, label} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: medText} = Entities

    var rowClassName = "col-md-12 " + styles['situation']
    var labelClassName = "glyphicon " + (this.state.hide ? "glyphicon-menu-right" : "glyphicon-menu-down")

    var onClickLabel = (e) => {
      console.log('MedText.render.onClickLabel: start: hide:', this.state.hide)
      this.setState({hide: !this.state.hide})
    }
    
    return (
      <div className={rowClassName}>
        <h2 onClick={onClickLabel}><span aria-hidden="true" className={labelClassName}></span>{label}</h2>
      </div>
    )
  }
}

export default MedText
