import ComponentMyImage from '../components/MyImage'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initMyImage} from '../actions/MyImage'
import {getUUID} from '../utils/utils'

class MyImage extends ComponentMyImage {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initMyImage(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {myImage: myImageMap} = state
  var myImage = myImageMap.toJS()
  var immutableEntities = myImageMap.get('Entities', Immutable.Map())

  const {myId, Entities} = myImage
  return {myId, Entities, rootState: 'myImage', immutableEntities}
}

export default connect(
  mapStateToProps,
)(MyImage)
