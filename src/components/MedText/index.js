import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps, delay} from '../utils'
import CommonComponent from '../CommonComponent'

import {DateTimePicker} from 'react-widgets'

import styles from '../Common.css'


class MedText extends CommonComponent {
  constructor(props) {
    super(props)
    this.state = {}
    
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
    const {[myId]: medText} = Entities
    
    const {text, startDate, endDate} = info
    
    var inputClassName = "form-control " + styles['input']

    var inputTextKey = 'info-' + idx + '-text'

    var inputText = this.state[inputTextKey] || text || ''

    var onChangeText = (e) => {
      var value = e.target.value
      this.setState({[inputTextKey]: value})
      delay(onChangeTextCore, {value})
    }

    var onChangeTextCore = ({value}) => {
      if(value !== this.state[inputTextKey]) return
      dispatch(medText.setInfo(rootState, myId, idx, 'text', value.trim()))
    }

    var onChangeStartDate = (value) => {
      console.log('MedText.renderInfo: onChangeStartDate: myId:', myId, 'idx:', idx, 'value:', value)
      dispatch(medText.setInfo(rootState, myId, idx, 'startDate', value))
    }

    var onChangeEndDate = (value) => {
      console.log('MedText.renderInfo: onChangeEndDate: myId:', myId, 'idx:', idx, 'value:', value)
      dispatch(medText.setInfo(rootState, myId, idx, 'endDate', value))
    }
    
    console.log('MedText.renderInfo: to render: myId:', myId, 'idx:', idx, 'text:', text, 'startDate:', startDate, 'endDate:', endDate)

    return (
      <h2 key={idx}>
        <div className="col-md-2">
          <label className="pull-right">名稱:</label>
        </div>
        <div className="col-md-3">
          <input type="text" value={inputText} className={inputClassName} onChange={onChangeText} />
        </div>
        <div className="col-md-3">
        <DateTimePicker time={false} value={startDate} format="YYYY-MM-DD" onChange={onChangeStartDate}/>
        </div>
        <div className="col-md-1" style={{textAlign: 'center'}}>
          ~
        </div>
        <div className="col-md-3">
          <DateTimePicker time={false} value={endDate} format="YYYY-MM-DD" onChange={onChangeEndDate}/>
        </div>
      </h2>
    )
  }
}

export default MedText
