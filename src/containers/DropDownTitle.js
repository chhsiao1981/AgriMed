import ComponentDropDownTitle from '../components/DropDownTitle'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initDropDownTitle} from '../actions/DropDownTitle'
import {getUUID} from '../utils/utils'

class DropDownTitle extends ComponentDropDownTitle {
  componentWillMount() {
    const {dispatch, rootState} = this.props
    var myId = getUUID()
    
    dispatch(initDropDownTitle(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {dropDownTitle: dropDownTitleMap} = state
  var dropDownTitle = dropDownTitleMap.toJS()
  var immutableEntities = dropDownTitleMap.get('Entities', Immutable.Map())

  const {myId, Entities} = dropDownTitle
  return {myId, Entities, rootState: 'dropDownTitle', immutableEntities}
}

export default connect(
  mapStateToProps,
)(DropDownTitle)
