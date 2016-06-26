import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from '../Common.css'

class NumberText extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, label} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: numberText} = Entities
    const {text: textStr} = numberText
    
    var onChange = (e) => {
      console.log('NumberText.render.onChange: myId:', myId, 'value:', e.target.value)
      dispatch(numberText.setText(rootState, myId, e.target.value.trim()))
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

export default NumberText
