import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from '../Common.css'

class NumberText extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, rootState, label} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: numberText} = Entities

    var onChange = (e) => {
    }

    var inputClassName = "form-control " + styles['input']
    
    return (
      <div className="row">
        <label className={styles['label']}>{label}</label>
        <input type="text" className={inputClassName} onChange={onChange}/>
      </div>  
    )
  }
}

export default NumberText
