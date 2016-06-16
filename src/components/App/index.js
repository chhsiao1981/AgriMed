import React, {Component} from 'react';
import Empty from '../Empty'
import Immutable from 'immutable'
import {isValidProps, delay} from '../utils'
import CommonComponent from '../CommonComponent'

import styles from '../Common.css'


export default class App extends CommonComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  shouldComponentUpdate(nextProps, nextState) {
    return super.shouldComponentUpdate(nextProps, nextState)
  }
  
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: App} = Entities

    return (
      <div className="form-group">
        <p>Hello World! myId: {myId}</p>
      </div>  
    )
  }
}
