import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'
import Leaflet from 'leaflet'

import styles from './MyMap.css'

class MyMap extends CommonComponent {
  constructor(props) {
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.onMapClick = this.onMapClick.bind(this)
  }
  
  componentDidMount() {
    console.log('MyMap.componentDidMount: start')
    var map = this.map = Leaflet.map(ReactDOM.findDOMNode(this), {
      minZoom: 2,
      maxZoom: 20,
      layers: [
        L.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
      ],
      attributionControl: false,
    })

    map.on('click', this.onMapClick)
    map.fitWorld()
  }

  componentWillUnmount() {
    console.log('MyMap.componentWillUnmount: start')
    this.map.off('click', this.onMapClick)
    this.map = null
  }
  
  onMapClick() {
    console.log('MyMap.onMapClick: start')
  }
  
  render() {
    console.log('MyMap.render: start')
    const {dispatch, myId, Entities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: myMap} = Entities

    console.log('MyMap.render: to render')
    
    return (
      <div className={styles['myMap']}>
      </div>
    )
  }
}

export default MyMap
