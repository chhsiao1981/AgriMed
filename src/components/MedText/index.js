import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import {DateTimePicker} from 'react-widgets'

import styles from '../Common.css'


class MedText extends CommonComponent {
  constructor(props) {
    super(props)
    this.renderInfo = this.renderInfo.bind(this)
  }
  
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, label} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: medText} = Entities
    const {info} = medText

    var rowClassName = "col-md-12 " + styles['situation']
    var labelClassName = "glyphicon glyphicon-plus"

    var inputClassName = "form-control " + styles['input']

    var onClickLabel = (e) => {
      dispatch(medText.addInfo(rootState, myId))
    }
    
    return (
      <div className={rowClassName}>
        <h2 onClick={onClickLabel}><span aria-hidden="true" className={labelClassName}></span> {label} </h2>
        {info.map((eachInfo, idx) => {return this.renderInfo(eachInfo, idx)})}
      </div>
    )
  }

  renderInfo(info, idx) {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    
    const {text, startDate, endDate} = info
    
    var inputClassName = "form-control " + styles['input']

    var onChangeText = (e) => {
    }

    console.log('MedText.renderInfo: to render: myId:', myId, 'idx:', idx, 'text:', text, 'startDate:', startDate, 'endDate:', endDate)

    return (
      <h2 key={idx}>
        <div className="col-md-2">
          <label className="pull-right">名稱:</label>
        </div>
        <div className="col-md-3">
          <input type="text" value={text} className={inputClassName} onChange={onChangeText} />
        </div>
        <div className="col-md-3">
          <DateTimePicker time={false} format="YYYY-MM-DD"/>
        </div>
        <div className="col-md-1" style={{'text-align': 'center'}}>
          ~
        </div>
        <div className="col-md-3">
          <DateTimePicker time={false} format="YYYY-MM-DD"/>
        </div>
      </h2>
    )
  }
}

export default MedText
