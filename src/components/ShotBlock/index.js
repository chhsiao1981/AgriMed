import React, {Component} from 'react'
import Empty from '../Empty'
import HOC from '../../utils/HOC'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import Dropzone from 'react-dropzone'

import styles from './ShotBlock.css'

class ShotBlock extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, rootState, className, name} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: shotBlock} = Entities

    var classNameStr = className + ' ' + styles['shot-block']

    return (
      <div className={classNameStr}>
        {this.renderUploadImage(dispatch, myId, Entities, rootState, name)}
        {this.renderCamera(dispatch, myId, Entities, rootState, name)}
        {this.renderImages(dispatch, myId, Entities, rootState, name)}
      </div>  
    )
  }

  renderUploadImage(dispatch, myId, Entities, rootState, name) {
    const {[myId]: shotBlock} = Entities

    var onDrop = (files) => {
      console.log('ShotBlock.render.onDrop: files:', files)
      dispatch(shotBlock.addImages(rootState, myId, files))
    }

    return (
      <Dropzone onDrop={onDrop} className={styles['dropzone']} activeClassName={styles['active-dropzone']}>
        <div>
          <div className={styles['photo']}>
            <div aria-hidden={true} className="glyphicon glyphicon-plus span"></div>
            <br/>
            {name}
          </div>
        </div>
      </Dropzone>
    )
  }

  renderCamera(dispatch, myId, Entities, rootState, name) {
    
  }

  renderImages(dispatch, myId, Entities, rootState, name) {
    return (
      <div>
      </div>
    )
  }

}

export default ShotBlock
