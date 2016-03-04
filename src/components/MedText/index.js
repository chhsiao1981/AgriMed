import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from '../Common.css'

class MedText extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: medText} = Entities

    var onChangeName = (e) => {
    }

    var onChangeTime = (e) => {
    }
    
    var inputClassName = "form-control " + styles['input']
    
    return (
      <div>
        <label className={styles['label']}>藥劑名稱</label>
        <input type="text" className={inputClassName} onChange={onChangeName}/>
        <label className={styles['label']}>使用時間</label>
        <input type="text" className={inputClassName} onChange={onChangeTime}/>
      </div>  
    )
  }
}

export default MedText
