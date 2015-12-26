import ComponentShotBlock from '../components/ShotBlock'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initShotBlock} from '../actions/ShotBlock'
import {getUUID} from '../utils/utils'

class ShotBlock extends ComponentShotBlock {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initShotBlock(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {shotBlock: shotBlockMap} = state
  var shotBlock = shotBlockMap.toJS()
  var immutableEntities = shotBlockMap.get('Entities', Immutable.Map())

  const {myId, Entities} = shotBlock
  return {myId, Entities, rootState: 'shotBlock', immutableEntities}
}

export default connect(
  mapStateToProps,
)(ShotBlock)
