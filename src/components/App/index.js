import React, {Component} from 'react';
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'
import Header from '../Header'
import Title from '../Title'
import ShotBlock from '../ShotBlock'

export default class App extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: app} = Entities

    const {headerId, titleId, wholeViewId, singleId, featureId, rootId, extraId} = app

    var buttonClassName = "btn btn-primary col-md-12"
    
    return (
      <div className="container">
        <Header dispatch={dispatch} myId={headerId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" header="農業病蟲害諮詢網" />
        <Title dispatch={dispatch} myId={titleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" title="請依項目提供照片" />
        <ShotBlock dispatch={dispatch} myId={wholeViewId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="園區全景圖" />
        <ShotBlock dispatch={dispatch} myId={singleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="單枝植物" />
        <ShotBlock dispatch={dispatch} myId={featureId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="患部特寫" />
        <ShotBlock dispatch={dispatch} myId={rootId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="植物根部" />
        <ShotBlock dispatch={dispatch} myId={extraId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" name="額外補充照片" />
        <div className="form-horizontal">
          <input type="button" className={buttonClassName} defaultValue="下一步" />
        </div>
      </div>
    )
  }
}
