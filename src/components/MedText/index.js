import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import {DateTimePicker} from 'react-widgets'

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
    const {text: textStr} = medText

    var rowClassName = "col-md-12 " + styles['situation']
    var labelClassName = "glyphicon " + (this.state.hide ? "glyphicon-plus" : "glyphicon-plus")

    var onChange = (e) => {
      console.log('MedText.render.onChange: myId:', myId, 'value:', e.target.value)
      dispatch(medText.setText(rootState, myId, e.target.value.trim()))
    }
    
    var inputClassName = "form-control " + styles['input']

    var onClickLabel = (e) => {
      console.log('MedText.render.onClickLabel: start: hide:', this.state.hide)
      this.setState({hide: !this.state.hide})
    }
    
    return (
      <div className={rowClassName}>
        <h2 onClick={onClickLabel}><span aria-hidden="true" className={labelClassName}></span> {label} </h2>
        <h2>
        <div className="col-md-2">
          <label className={'pull-right'}>名稱:</label>
        </div>
        <div className="col-md-3">
          <input type="text" value={textStr} className={inputClassName} onChange={onChange} />
        </div>
        <div className="col-md-3">
          <DateTimePicker time={false} format={"YYYY-MM-DD"}/>
        </div>
        <div className="col-md-1" style={{'text-align': 'center'}}>
          ~
        </div>
        <div className="col-md-3">
          <DateTimePicker time={false} format={"YYYY-MM-DD"}/>
        </div></h2>
      </div>
    )
  }
}

export default MedText
