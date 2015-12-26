import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import {Router, Route} from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

import App from './containers/App';

import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import './styles/app.less';
import 'react-widgets/lib/less/react-widgets.less'

const history = new HashHistory();
const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {() =>
          <Router history={history}>
            <Route path="/" component={App} />
          </Router>
        }
      </Provider>
    );
  }
}
React.render(<Root />, document.getElementById('app'))
