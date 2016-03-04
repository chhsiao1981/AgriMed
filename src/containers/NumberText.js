import ComponentNumberText from '../components/NumberText'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initNumberText} from '../actions/NumberText'
import {getUUID} from '../utils/utils'

class NumberText extends ComponentNumberText {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initNumberText(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {numberText: numberTextMap} = state
  var numberText = numberTextMap.toJS()
  var immutableEntities = numberTextMap.get('Entities', Immutable.Map())

  const {myId, Entities} = numberText
  return {myId, Entities, rootState: 'numberText', immutableEntities}
}

export default connect(
  mapStateToProps,
)(NumberText)
