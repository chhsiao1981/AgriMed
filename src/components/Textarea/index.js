import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps, delay} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from '../Common.css'

class Textarea extends CommonComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, label, height} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: textarea} = Entities
    const {textarea: textareaStr} = textarea

    var inputText = this.state.value || textareaStr || ''

    var onChange = (e) => {
      var value = e.target.value
      this.setState({value})
      delay(onChangeCore, {value})
    }
    
    var onChangeCore = ({value}) => {
      if(value !== this.state.value) return
      dispatch(textarea.setTextarea(rootState, myId, value.trim()))
    }

    var inputClassName = styles['input'] + ' ' + ' form-control'
    
    return (
      <div className="row">
        <label className={styles['label']}>{label}</label>
        <textarea type="text" value={inputText} className={inputClassName} onChange={onChange} rows="4"/>
      </div>
    )
  }
}

export default Textarea
