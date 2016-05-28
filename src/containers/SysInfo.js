import ComponentSysInfo from '../components/SysInfo'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initSysInfo} from '../actions/SysInfo'
import {getUUID} from '../utils/utils'

class SysInfo extends ComponentSysInfo {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initSysInfo(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {sysInfo: sysInfoMap} = state
  var sysInfo = sysInfoMap.toJS()
  var immutableEntities = sysInfoMap.get('Entities', Immutable.Map())

  const {myId, Entities} = sysInfo
  return {myId, Entities, rootState: 'sysInfo', immutableEntities}
}

export default connect(
  mapStateToProps,
)(SysInfo)
