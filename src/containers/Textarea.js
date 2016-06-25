import ComponentTextarea from '../components/Textarea'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initTextarea} from '../actions/Textarea'
import {getUUID} from '../utils/utils'

class Textarea extends ComponentTextarea {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initTextarea(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {textarea: textareaMap} = state
  var textarea = textareaMap.toJS()
  var immutableEntities = textareaMap.get('Entities', Immutable.Map())

  const {myId, Entities} = textarea
  return {myId, Entities, rootState: 'textarea', immutableEntities}
}

export default connect(
  mapStateToProps,
)(Textarea)
