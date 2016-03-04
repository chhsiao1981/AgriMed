import ComponentMedText from '../components/MedText'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initMedText} from '../actions/MedText'
import {getUUID} from '../utils/utils'

class MedText extends ComponentMedText {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initMedText(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {medText: medTextMap} = state
  var medText = medTextMap.toJS()
  var immutableEntities = medTextMap.get('Entities', Immutable.Map())

  const {myId, Entities} = medText
  return {myId, Entities, rootState: 'medText', immutableEntities}
}

export default connect(
  mapStateToProps,
)(MedText)
