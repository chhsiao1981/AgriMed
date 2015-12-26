import React, {Component} from 'react';
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'


export default class App extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: App} = Entities

    return (
      <div className="form-group">
        <p>Hello World! myId: {myId}</p>
      </div>  
    )
  }
}
