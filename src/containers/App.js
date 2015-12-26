import ComponentApp from '../components/App'
import {connect} from 'react-redux'
import Immutable from 'immutable'
import {initApp} from '../actions/App'
import {getUUID} from '../utils/utils'

class App extends ComponentApp {
  componentWillMount() {
    const {dispatch, rootState, query} = this.props
    var myId = getUUID()

    dispatch(initApp(rootState, myId))
  }
}

function mapStateToProps (state) {
  const {app: appMap} = state
  var app = appMap.toJS()
  var immutableEntities = appMap.get('Entities', Immutable.Map())

  console.log('containers.App.mapStateToProps: app:', app)

  const {myId, Entities} = app
  return {myId, Entities, rootState: 'app', immutableEntities}
}

export default connect(mapStateToProps)(App)
