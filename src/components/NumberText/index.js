import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps, delay} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from '../Common.css'

class NumberText extends CommonComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, label} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: numberText} = Entities
    const {text: textStr} = numberText

    var inputText = this.state.value || textStr || ''
    
    var onChange = (e) => {
      var value = e.target.value
      this.setState({value})
      delay(onChangeCore, {value})
    }

    var onChangeCore = ({value}) => {
      if(value !== this.state.value) return
      dispatch(numberText.setText(rootState, myId, value.trim()))
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
