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
    this.componentDidMountCore = this.componentDidMountCore.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.onMapClick = this.onMapClick.bind(this)
    this.onMapMove = this.onMapMove.bind(this)
    this.onMapMoveEnd = this.onMapMoveEnd.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  
  componentDidMount() {
    const {dispatch, myId, Entities, rootState} = this.props

    if(navigator && navigator.geolocation)
      navigator.geolocation.getCurrentPosition(position => this.componentDidMountCore(dispatch, myId, Entities, rootState, position))
    else
      this.componentDidMountCore(dispatch, myId, Entities, rootState)
  }

  componentDidMountCore(dispatch, myId, Entities, rootState, position) {
    const {[myId]: myMap} = Entities

    console.log('MyMap.componentDidMount: start: myId:', myId)
    var theNode = ReactDOM.findDOMNode(this)
    console.log('MyMap.componentDidMount: theNode:', theNode, 'position:', position)

    var lat = (position && position.coords) ? position.coords.latitude : 25.05
    var lon = (position && position.coords) ? position.coords.longitude : 121.52

    var map = Leaflet.map(theNode).setView([lat, lon], 14)
    this.map = map

    var myIcon = Leaflet.icon({iconUrl: 'images/photoc.png'})
    var centerMarker = Leaflet.marker([lat, lon], {icon: myIcon})
    this.centerMarker = centerMarker
    this.centerMarker.addTo(this.map)
    
    Leaflet.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map)

    map.on('click', this.onMapClick)
    map.on('move', this.onMapMove)
    map.on('moveend', this.onMapMoveEnd)

    dispatch(myMap.setLatLon(rootState, myId, lat, lon))
  }

  componentWillUnmount() {
    console.log('MyMap.componentWillUnmount: start')
    this.map.off('click', this.onMapClick)
    this.map.off('move', this.onMapMove)
    this.map.off('moveend', this.onMapMoveEnd)
    this.map = null
  }
  
  onMapClick(e, ...params) {
    console.log('MyMap.onMapClick: start: e:', e, 'params:', params)
  }

  onMapMove(e, ...params) {
    var center = this.map.getCenter()
    console.log('MyMap.onMapMove: start: e:', e, 'params:', params, 'center:', center)
    //this.centerMarker.setLatLng(center)
    this.centerMarker.setOpacity(0)
    this.center = center
  }
  onMapMoveEnd(e, ...params) {
    console.log('MyMap.onMapMoveEnd: start: e:', e, 'params:', params)
    this.centerMarker.setOpacity(1)
    this.centerMarker.setLatLng(this.center)
  }
  
  render() {
    console.log('MyMap.render: start')
    const {dispatch, myId, Entities, rootState} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: myMap} = Entities

    var theStyle = window.innerHeight < 600 ? 'myMap' : 'myMap-desktop'

    console.log('MyMap.render: to render')
    
    return (
      <div className={styles[theStyle]}>
      </div>
    )
  }
}

export default MyMap
