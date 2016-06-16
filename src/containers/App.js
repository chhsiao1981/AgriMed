import ComponentApp from '../components/App'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initApp} from '../actions/App'
import {getUUID} from '../utils/utils'

class App extends ComponentApp {
  componentWillMount() {
    const {dispatch, rootState, location: {query}} = this.props
    var myId = getUUID()

    dispatch(initApp(rootState, myId, query))
  }
}

function mapStateToProps (state) {
  const {app: appMap} = state
  var app = appMap.toJS()
  var immutableEntities = appMap.get('Entities', Immutable.Map())

  const {myId, Entities} = app
  return {myId, Entities, rootState: 'app', immutableEntities}
}

export default connect(mapStateToProps)(App)
