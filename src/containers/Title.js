import ComponentTitle from '../components/Title'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initTitle} from '../actions/Title'
import {getUUID} from '../utils/utils'

class Title extends ComponentTitle {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initTitle(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {title: titleMap} = state
  var title = titleMap.toJS()
  var immutableEntities = titleMap.get('Entities', Immutable.Map())

  const {myId, Entities} = title
  return {myId, Entities, rootState: 'title', immutableEntities}
}

export default connect(
  mapStateToProps,
)(Title)
