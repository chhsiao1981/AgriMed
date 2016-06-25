import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from '../Common.css'

class Textarea extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, label} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: textarea} = Entities
    const {textarea: textareaStr} = textarea

    var onChange = (e) => {
      dispatch(textarea.setTextarea(rootState, myId, e.target.value.trim()))
    }

    var inputClassName = "form-control " + styles['input']
    
    return (
      <div className="row">
        <label className={styles['label']}>{label}</label>
        <textarea type="text" value={textareaStr} className={inputClassName} onChange={onChange}/>
      </div>
    )
  }
}

export default Textarea
