import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from '../Common.css'

class Text extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, label} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: text} = Entities
    const {text: textStr} = text
    
    var onChange = (e) => {
      console.log('Text.render.onChange: myId:', myId, 'value:', e.target.value)
      dispatch(text.setText(rootState, myId, e.target.value.trim()))
    }
    
    var inputClassName = "form-control " + styles['input']
    
    return (
      <div className="row">
        <label className={styles['label']}>{label}</label>
        <input type="text" value={textStr} className={inputClassName} onChange={onChange}/>
      </div>
    )
  }
}

export default Text
