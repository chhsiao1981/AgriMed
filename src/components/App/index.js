import React, {Component} from 'react';
import Empty from '../Empty'
import {isValidProps} from '../utils'
import {Link} from 'react-router'
import CommonComponent from '../CommonComponent'
import Header from '../Header'
import Title from '../Title'
import Text from '../Text'
import ShotBlock from '../ShotBlock'
import MyMap from '../MyMap'

import styles from '../Common.css'

export default class App extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: app} = Entities

    const {headerId, titleId, wholeViewId, singleId, featureId, rootId, extraId, nameId, telId, addressId, emailId, myMapId} = app

    var buttonRowClassName = "col-md-12 " + styles['button-row']
    var buttonClassName = "btn btn-primary col-md-12"

    return (
      <div className="container">
        <Header dispatch={dispatch} myId={headerId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" header="農業病蟲害諮詢網" />
        <Title dispatch={dispatch} myId={titleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" title="聯絡資訊" />
        <div className="col-md-12">
          <div className="form-horizontal">
            <MyMap dispatch={dispatch} myId={myMapId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} />
        
            <Text dispatch={dispatch} myId={nameId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="詢問人" />
            <Text dispatch={dispatch} myId={addressId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="住址" />
            <Text dispatch={dispatch} myId={telId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="電話" />
            <Text dispatch={dispatch} myId={emailId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" label="Email" />
          </div>
        </div>
        <Title dispatch={dispatch} myId={titleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" title="請依項目提供照片" />
        <ShotBlock dispatch={dispatch} myId={wholeViewId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="園區全景圖" />
        <ShotBlock dispatch={dispatch} myId={singleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="單枝植物" />
        <ShotBlock dispatch={dispatch} myId={featureId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="患部特寫" />
        <ShotBlock dispatch={dispatch} myId={rootId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="植物根部" />
        <ShotBlock dispatch={dispatch} myId={extraId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="額外補充照片" />
        <div className={buttonRowClassName}>
          <Link to="/step2">
            <input type="button" className={buttonClassName} defaultValue="下一步" />
          </Link>
        </div>
      </div>
    )
  }
}
