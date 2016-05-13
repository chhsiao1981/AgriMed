import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'
import {Router, Route, hashHistory, browserHistory} from 'react-router'

import App from './containers/App'
import Step2 from './containers/Step2'
import Step3 from './containers/Step3'

import 'bootstrap/dist/css/bootstrap.css'
import 'normalize.css'
import './styles/app.less'
import 'react-widgets/lib/less/react-widgets.less'
import 'leaflet/dist/leaflet.css'

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
        </Router>
      </Provider>
    )
  }
}
ReactDOM.render(<Root />, document.getElementById('app'))
