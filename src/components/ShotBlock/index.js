import React, {Component} from 'react'
import Empty from '../Empty'
import {isValidProps} from '../utils'
import CommonComponent from '../CommonComponent'

import Dropzone from 'react-dropzone'

import MyImage from '../MyImage'

import styles from './ShotBlock.css'


class ShotBlock extends CommonComponent {
  render() {
    const {dispatch, myId, Entities, immutableEntities, rootState, className, name} = this.props
    if(!isValidProps(myId, Entities)) return (<Empty />)

    const {[myId]: shotBlock} = Entities

    var classNameStr = className + ' ' + styles['shot-block']

    return (
      <div className={classNameStr}>
        {this.renderUploadImage(dispatch, myId, Entities, immutableEntities, rootState, name)}
        {this.renderImages(dispatch, myId, Entities, immutableEntities, rootState, name)}
      </div>  
    )
  }

  renderUploadImage(dispatch, myId, Entities, immutableEntities, rootState, name) {
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

  renderImages(dispatch, myId, Entities, immutableEntities, rootState, name) {
    const {[myId]: {imgIds: imgIds}} = Entities

    console.log('ShotBlock.renderImages: myId:', myId, 'imgIds:', imgIds)

    var classNameStr = 'container-fluid ' + styles['images']

    return (
      <div className={classNameStr}>
        <div className="row">
          {imgIds.map((eachImgId, idx) => this.renderImage(dispatch, eachImgId, Entities, immutableEntities, rootState, idx))}
        </div>
      </div>
    )
  }

  renderImage(dispatch, imgId, Entities, immutableEntities, rootState, idx) {
    var className = "col-md-4"
    return (
      <MyImage key={idx} className={className} dispatch={dispatch} myId={imgId} Entities={Entities} rootState={rootState} immutableEntities={immutableEntities} />
    )
  }
}

export default ShotBlock
