import ComponentStep2 from '../components/Step2'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initStep2} from '../actions/Step2'
import {getUUID} from '../utils/utils'

class Step2 extends ComponentStep2 {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initStep2(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {step2: step2Map} = state
  var step2 = step2Map.toJS()
  var immutableEntities = step2Map.get('Entities', Immutable.Map())

  console.log('conatiners.Step2.mapStateToProps: step2:', step2)

  const {myId, Entities} = step2

  return {myId, Entities, rootState: 'step2', immutableEntities}
}

export default connect(
  mapStateToProps,
)(Step2)
