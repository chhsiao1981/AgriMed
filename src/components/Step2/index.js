import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import {Link} from 'react-router'
import CommonComponent from '../CommonComponent'
import Header from '../Header'
import Title from '../Title'
import Text from '../Text'
import NumberText from '../NumberText'
import MedText from '../MedText'

import styles from '../Common.css'

class Step2 extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: step2} = Entities
    const {headerId, titleId, cropId, varietyId, addressId, beforeId, dayId, sickDayId, acreId, sickAcreId, medId, fertileId, commentId} = step2

    var rowClassName = "col-md-12 " + styles['situation']
    var buttonRowClassName = "col-md-12 " + styles['button-row']
    var buttonClassName = "btn btn-primary col-md-5"
    var buttonClassNameRight = "btn btn-primary col-md-5 pull-right"

    return (
      <div className="container">
        <Header dispatch={dispatch} myId={headerId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" header="醫農" />
        <Title dispatch={dispatch} myId={titleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" title="受害情形" />
        <div className="col-md-12">
          <div className="form-horizontal">
            <Text dispatch={dispatch} myId={cropId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="作物名稱" />
            <Text dispatch={dispatch} myId={varietyId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="品種" />
            <Text dispatch={dispatch} myId={addressId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="田地地址" />
            <Text dispatch={dispatch} myId={beforeId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="前期種植" />
            <NumberText dispatch={dispatch} myId={dayId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="種植天數" />
            <NumberText dispatch={dispatch} myId={sickDayId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="發病天數" />
            <NumberText dispatch={dispatch} myId={acreId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="栽種面積" />
            <NumberText dispatch={dispatch} myId={sickAcreId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="受害面積" />
          </div>
        </div>
        <div className={rowClassName}>
          <h2><span aria-hidden="true" className="glyphicon glyphicon-menu-down"></span>用藥情形</h2>
          <MedText dispatch={dispatch} myId={medId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="" />
        </div>
        <div className={rowClassName}>
          <h2><span aria-hidden="true" className="glyphicon glyphicon-menu-down"></span>施肥情形</h2>
          <MedText dispatch={dispatch} myId={fertileId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="施肥情形" />
        </div>
        <div className={rowClassName}>
          <h2><span aria-hidden="true" className="glyphicon glyphicon-menu-down"></span>補充說明</h2>
          <Text dispatch={dispatch} myId={commentId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="" />
        </div>
        <div className={buttonRowClassName}>
          <Link to="/">        
            <input type="button" className={buttonClassName} defaultValue="上一步" />
          </Link>
          <Link to="/step3">
            <input type="button" className={buttonClassNameRight} defaultValue="下一步" />
          </Link>
        </div>
      </div>  
    )
  }
}

export default Step2
