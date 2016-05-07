import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import {Router, Route} from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

import App from './containers/App';
import Step2 from './containers/Step2';
import Step3 from './containers/Step3';

import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import './styles/app.less';
import 'react-widgets/lib/less/react-widgets.less'
import 'leaflet/dist/leaflet.css'

const history = new HashHistory();
const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {() =>
          <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/step2" component={Step2} />
            <Route path="/step3" component={Step3} />
          </Router>
        }
      </Provider>
    );
  }
}
React.render(<Root />, document.getElementById('app'))
