import ComponentHeader from '../components/Header'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initHeader} from '../actions/Header'
import {getUUID} from '../utils/utils'

class Header extends ComponentHeader {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initHeader(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {header: headerMap} = state
  var header = headerMap.toJS()
  var immutableEntities = headerMap.get('Entities', Immutable.Map())

  const {myId, Entities} = header
  return {myId, Entities, rootState: 'header', immutableEntities}
}

export default connect(
  mapStateToProps,
)(Header)
