import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'
import Header from '../Header'
import Title from '../Title'
import Text from '../Text'


class Step3 extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: step3} = Entities
    const {headerId, titleId, nameId, telId, addressId, emailId} = step3

    return (
      <div className="container">
        <Header dispatch={dispatch} myId={headerId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" header="醫農" />
        <Title dispatch={dispatch} myId={titleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" title="聯絡資訊" />
      </div>  
    )
  }
}

export default HOC(Step3)
