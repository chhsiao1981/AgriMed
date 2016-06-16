import ComponentText from '../components/Text'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initText} from '../actions/Text'
import {getUUID} from '../utils/utils'

class Text extends ComponentText {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initText(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {text: textMap} = state
  var text = textMap.toJS()
  var immutableEntities = textMap.get('Entities', Immutable.Map())

  const {myId, Entities} = text
  return {myId, Entities, rootState: 'text', immutableEntities}
}

export default connect(
  mapStateToProps,
)(Text)
