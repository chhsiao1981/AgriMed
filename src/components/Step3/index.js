import React, {Component} from 'react'
import Empty from '../Empty'
import {Link} from 'react-router'
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

    var buttonRowClassName = "col-md-12 " + styles['button-row']
    var buttonClassName = "btn btn-primary col-md-5"
    var buttonClassNameRight = "btn btn-primary col-md-5 pull-right"

    var onClick = (e) => {
      console.log('Step3.render.onClick: start')
      dispatch(step3.submit(rootState, myId))
    }

    return (
      <div className="container">
        <Header dispatch={dispatch} myId={headerId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" header="醫農" />
        <Title dispatch={dispatch} myId={titleId} Entities={Entities} immutableEntities={immutableEntities} rootState={rootState} className="row" title="聯絡資訊" />
        <div className={buttonRowClassName}>
          <Link to="/step2">
            <input type="button" className={buttonClassName} defaultValue="上一步" />
          </Link>
          <input type="button" className={buttonClassNameRight} defaultValue="確認送出" onClick={onClick}/>
        </div>
      </div>  
    )
  }
}

export default Step3
