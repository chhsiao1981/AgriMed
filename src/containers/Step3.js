import ComponentStep3 from '../components/Step3'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initStep3} from '../actions/Step3'
import {getUUID} from '../utils/utils'

class Step3 extends ComponentStep3 {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initStep3(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {step3: step3Map} = state
  var step3 = step3Map.toJS()
  var immutableEntities = step3Map.get('Entities', Immutable.Map())

  const {myId, Entities} = step3
  return {myId, Entities, rootState: 'step3', immutableEntities}
}

export default connect(
  mapStateToProps,
)(Step3)
