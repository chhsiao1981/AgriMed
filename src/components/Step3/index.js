import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'
import Header from '../Header'
import Title from '../Title'
import Text from '../Text'

import styles from '../Common.css'

class Step3 extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: step3} = Entities
    const {headerId, titleId, nameId, telId, addressId, emailId} = step3

    var buttonClassName = "btn btn-primary col-md-5"
    var buttonClassNameRight = "btn btn-primary col-md-5 pull-right"

    return (
      <div className="container">
        <Header dispatch={dispatch} myId={headerId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" header="醫農" />
        <Title dispatch={dispatch} myId={titleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" title="聯絡資訊" />
        <div className="col-md-12">
          <div className="form-horizontal">
            <Text dispatch={dispatch} myId={nameId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="詢問人" />
            <Text dispatch={dispatch} myId={telId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="電話" />
            <Text dispatch={dispatch} myId={telId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="住址" />
            <Text dispatch={dispatch} myId={telId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="Email" />
          </div>
        </div>
        <div className="form-horizontal">
          <input type="button" className={buttonClassName} defaultValue="上一步" />
          <input type="button" className={buttonClassNameRight} defaultValue="確認送出" />
        </div>
      </div>  
    )
  }
}

export default HOC(Step3)
