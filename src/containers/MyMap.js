import ComponentMyMap from '../components/MyMap'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initMyMap} from '../actions/MyMap'
import {getUUID} from '../utils/utils'

class MyMap extends ComponentMyMap {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initMyMap(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {myMap: myMapMap} = state
  var myMap = myMapMap.toJS()
  var immutableEntities = myMapMap.get('Entities', Immutable.Map())

  const {myId, Entities} = myMap
  return {myId, Entities, rootState: 'myMap', immutableEntities}
}

export default connect(
  mapStateToProps,
)(MyMap)
