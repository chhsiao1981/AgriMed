import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'


class SysInfo extends CommonComponent {
  constructor(props) {
    super(props)
    this.setCurrentPosition = this.setCurrentPosition.bind(this)
    this.state = {lat: 0, lon: 0}
  }

  setCurrentPosition(position) {
    if(position && position.coords)
      this.setState({lat: position.coords.latitude, lon: position.coords.longitude})
    else
      this.setState({lat: 0, lon: 0})
  }
  
  render() {
    const {dispatch, myId, Entities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: sysInfo} = Entities

    if (navigator && navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this.setCurrentPosition)
    else
      this.setCurrentPosition()

    return (
      <div className="form-group">
        Hello SysInfo: {myId} screen width: {window.innerWidth} height: {window.innerHeight} lat: {this.state.lat} lon: {this.state.lon}
      </div>  
    )
  }
}

export default SysInfo
